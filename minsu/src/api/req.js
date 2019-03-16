import axios from "axios";
import qs from "qs";
export default {
	getRecomand(){
		return axios({
			method:"get",
			url:"/api/getRecomand"
		})
	},
	getOneById(id){
		return axios({
			method:"get",
			url:"/api/getOne/"+id
		})
	}
}
