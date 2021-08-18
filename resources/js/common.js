export default {
	data(){
		return {

		}
	},
	methods: {
        async callUrl(method, url, dataObj){
            try{
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj,
                    headers: { Authorization: `Bearer ${this.$store.state.auth.token}` }
                });
            }catch(e){
                return e.response
            }
        },
		async callApi(method, url, dataObj){
			try{
				return await axios({
					method: method,
					url: '/api/'+url,
					data: dataObj,
                    headers: { Authorization: `Bearer ${this.$store.state.auth.token}` }
				});
			}catch(e){
				return e.response
			}
		},

        i(desc, title="Hey") {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        s(desc, title="Great!") {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        w(desc, title="Oops!") {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        e(desc, title="Oops!") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }, 
        swr(desc='Something went wrong! Please try again.', title="Oops") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
	}
}