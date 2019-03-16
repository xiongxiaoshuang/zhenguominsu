const express = require("express");
const router = express.Router();
const DB = require("../module/db.js");
const db = new DB("minsu");
const jwt = require("../module/jwt.js");
const fs = require("fs");

//获取推荐的商品
router.get("/getRecomand",(req,res)=>{
	db.find("tabList",{},(err,data)=>{
		res.send(data)
	})
})
//获取单个商品的详细信息
router.get("/getOne/:id",(req,res)=>{
	let id=req.params.id;
	console.log(id);
	db.find("recomandOpt",{id},(err,data)=>{
		res.send(data);
	})
})
db.insertMany("recomandOpt",
	[{
		title:"近迪士尼【淳庐】-淳熙 双床房 免费乐园接送、含美味早餐（动物园\浦东机场）",
		images:"http://localhost:3000/img/1.jpg",
		type:"独立单间",
		typedetail:"30平·独卫",
		persons:"可住3人",
		nums:"双人大床*1·单人床*1",
		zhekou:"",
		tehui:"新上架房源，首批客房可享受9折优惠",
		youhui:"3天以上9.5折优惠，7天以上8.5折优惠",
		address:"上海浦东新区川沙新镇陈桥村",
		fanwei:"迪士尼度假区周边",
		pingjia:"5.0分非常好",
		produce:"一隅郊野民宿。她距离闻名遐迩的迪斯尼近在咫尺，直线距离1.5公里，独享得天独厚的地理优势。华灯初上您可以欣赏到乐园绽放出的璀璨光芒。",
		sheshi:["2张床","烘干机","牙具","电视","28项设施"],
		fkpj:"",
		
	}
	],(err,data)=>{
		
	})
module.exports = router;