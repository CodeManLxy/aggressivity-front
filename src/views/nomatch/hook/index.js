import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const useGood = (init) => {
    const router = useRouter()
    const num = ref(init)
    let stop
    onMounted(() => {
        stop = setInterval(() => {
            num.value--
            if (num.value === 0) {
                router.push('/')
            }
        }, 1000);
    }),

    onUnmounted(() => {
        stop && clearInterval(stop)
    })

    return num
}

export default useGood