import Vue from 'vue';

export default function create(Component, props) {
    const vm = new Vue({
        render() {
            return h(Component, {props});
        }
    }).$mount("#app")

    document.body.appendChild(vm.$el)

    const comp = vm.$children[0];

    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp;
}
