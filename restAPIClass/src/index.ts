import express, { NextFunction, Router, Request, Response } from "express";
// Express 라이브러리
import bodyParser from "body-parser"; // 요청 본문을 파싱하기 위한 body-parser
import cors from "cors"; // CORS(Cross-Origin Resource Sharing) 설정을 위한 모듈
import { Customer, Product } from "./types";
import databaseA from "./database";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connetDB from "./database";
import CustomerModel from "./models/customers";
import jwt, { VerifyErrors } from "jsonwebtoken";

const app = express(); // Express  생성
const PORT = 4000; // 서버  포트를 지정
const router = Router(); //  Express 라우터를 사용

//jwt 적용
const sec: string = process.env.TOKEN_SECRET || "default_secret_key"; // 기본값 추가
const generateAcessToken = (username: any) => {
  return jwt.sign({ username }, sec, { expiresIn: "600s" });
};
//auth
router.post("/api/v1/auth", (req, res) => {
  const token = generateAcessToken({ username: req.body.username });
  console.log(token);
  res.json(token);
});

//token 생성 함수
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  //const authHeader = req.headers["authorization"];
  const authHeader = req.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).send("Token is missing");
  }

  jwt.verify(token, sec, (err: VerifyErrors | null, decoded: any) => {
    if (err) {
      return res.status(403).send("Invalid token");
    }
    (req as any).user = decoded;
    next(); // 여기로 이동
  });
};

//bodyParser 사용
app.use(bodyParser.json()); //express.json()
//cors 사용
//app.use(cors);
const corsOptions = {
  origin: "*", //모든 도메인에서의 요청을 허용
  credential: true, //// 자격 증명을 포함한 요청을 허용
};
app.use(cors(corsOptions)); // CORS 설정 적용
require("dotenv").config(); //환경변수 설정 적용

app.listen({ port: PORT }, () => {
  // 지정된 포트에서 서버를 시작
  console.log(`localhost:${PORT}에서 실행`); // 서버가 성공적으로 실행 확인
});

//Get요청 , 경로('/')
app.get("/", (req, res) => {
  res.send("hello World");
});

//db 연결 확인
connetDB();

//express에 router연결하여 사용
app.use(router);

//jwt 미적용
//router.get("/api/v1/customers", async (req, res) => {
const ranId = () => {
  return Math.floor(Math.random() * 1000);
};
//jwt 적용
router.get("/api/v1/customers", authenticateToken, async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (error) {
    console.error("고객 조회 실패", error);
    res.status(500).json({ error: " 조회 중 오류가 발생하였습니다." });
  }
});

//특정 id 조회
router.get("/api/v1/customers/:id", async (req, res) => {
  try {
    const customer = await CustomerModel.findOne({ id: req.params.id });
    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (error) {
    console.error("고객 조회 실패", error);
    res.status(500).json({ error: "조회 중 오류가 발생하였습니다." });
  }
});

//생성
router.post("/api/v1/customers", async (req, res) => {
  //typescript id 제외 옵션 : Omit
  const customer: Omit<Customer, "id"> = req.body;

  const newCustomer = new CustomerModel({
    id: uuidv4(),
    name: customer.name,
    address: customer.address,
    email: customer.email,
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error("고객 저장 실패", error);
    res.status(500).json({ error: "고객 정보 저장 중 오류 발생하였습니다." });
  }
});

//특정 id의 정보 삭제
router.delete("/api/v1/customers/:id", async (req, res) => {
  try {
    const result = await CustomerModel.findByIdAndDelete({ id: req.params.id });
    res.status(201).json("{고객 삭제 성공}");
  } catch (error) {
    console.error("고객 삭제 실패", error);
    res.status(500).json({ error: "고객 정보 삭제 중 오류 발생하였습니다." });
  }
});

router.put("/api/v1/customers/:id", async (req, res) => {
  try {
    const customer = await CustomerModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );

    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (error) {
    console.error("고객 정보 수정 오류", error);
    res.status(500).json({ error: "고객 정보 수정 중 오류 발생하였습니다." });
  }
});