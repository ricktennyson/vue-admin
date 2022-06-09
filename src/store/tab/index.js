export default {
    state: {
        isCollapse: true
    },
    mutations:{
        setCollapseValue(state){
            state.isCollapse = !state.isCollapse
        }
    }
}