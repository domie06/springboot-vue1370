const base = {
    get() {
        return {
            url : "http://localhost:8080/shequyiliaofw/",
            name: "shequyiliaofw",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shequyiliaofw/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区医疗服务系统"
        } 
    }
}
export default base
