import { reactive, toRefs } from "vue"

export const useRequest = (request, options = {}) => {
  const state = reactive({
    data: undefined,
    error: undefined,
    loading: false
  })

  const run  = async (...args) =>{
    try {
      const result = await request(...args)
      state.data = result;
      state.loading = false;

      if (options.formatResult) {
        state.data = options.formatResult(state.data)
      }
      options.onSuccess?.(state.data)
    } catch (error) {
      state.error = err;
      state.loading = false;
      options.onError?.(error)
    }
  }

  onMounted(() => {
    if (!options.manual) run(...(defaultParams));
  });

  return {
    ...toRefs(state),
    run
  }
}
