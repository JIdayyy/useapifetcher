/**
 * @license
 * author:
 * useapifetcher.js v1.0.0
 * Released under the ISC license.
 */

var useapifetcher = (function (exports, react) {
  "use strict";

  const useApi = (props) => {
    const [queryState, setQueryState] = react.useState({
      data: null,
      loading: false,
      error: null,
    });
    const getData = async () => {
      try {
        setQueryState((state) => ({ ...state, loading: true }));
        const response = await props.queryFn();
        setQueryState((state) => ({
          ...state,
          data: response,
          loading: false,
        }));
        if (props.onSuccess) {
          props.onSuccess(response);
        }
      } catch (error) {
        setQueryState((state) => ({ ...state, error, loading: false }));
        if (props.onError) {
          props.onError(error);
        }
      }
    };
    react.useEffect(() => {
      getData();
    }, []);
    return {
      data: queryState.data,
      loading: queryState.loading,
      error: queryState.error,
      refetch: getData,
    };
  };

  var useApi$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    default: useApi,
  });

  exports.useApi = useApi$1;

  Object.defineProperty(exports, "__esModule", { value: true });

  return exports;
})({}, react);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlYXBpLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaG9va3MvdXNlQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFVzZUFwaVByb3BzPFQ+IHtcbiAgcXVlcnlGbjogKCkgPT4gUHJvbWlzZTxUPjtcbiAgb25TdWNjZXNzPzogKGRhdGE6IFQpID0+IHZvaWQ7XG4gIG9uRXJyb3I/OiAoZXJyb3I6IHVua25vd24pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBRdWVyeVN0YXRlPFQ+IHtcbiAgZGF0YTogVCB8IG51bGw7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yOiB1bmtub3duO1xufVxuXG5jb25zdCB1c2VBcGkgPSA8VD4ocHJvcHM6IFVzZUFwaVByb3BzPFQ+KSA9PiB7XG4gIGNvbnN0IFtxdWVyeVN0YXRlLCBzZXRRdWVyeVN0YXRlXSA9IHVzZVN0YXRlPFF1ZXJ5U3RhdGU8VD4+KHtcbiAgICBkYXRhOiBudWxsLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yOiBudWxsLFxuICB9KTtcblxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRRdWVyeVN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfSkpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9wcy5xdWVyeUZuKCk7XG4gICAgICBzZXRRdWVyeVN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGRhdGE6IHJlc3BvbnNlLCBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgICBpZiAocHJvcHMub25TdWNjZXNzKSB7XG4gICAgICAgIHByb3BzLm9uU3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldFF1ZXJ5U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICAgIGlmIChwcm9wcy5vbkVycm9yKSB7XG4gICAgICAgIHByb3BzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YTogcXVlcnlTdGF0ZS5kYXRhLFxuICAgIGxvYWRpbmc6IHF1ZXJ5U3RhdGUubG9hZGluZyxcbiAgICBlcnJvcjogcXVlcnlTdGF0ZS5lcnJvcixcbiAgICByZWZldGNoOiBnZXREYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQXBpO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWNBLE1BQU0sTUFBTSxHQUFHLENBQUksS0FBcUIsS0FBSTtJQUMxQyxJQUFBLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUdBLGNBQVEsQ0FBZ0I7SUFDMUQsUUFBQSxJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQUEsT0FBTyxFQUFFLEtBQUs7SUFDZCxRQUFBLEtBQUssRUFBRSxJQUFJO0lBQ1osS0FBQSxDQUFDLENBQUM7SUFFSCxJQUFBLE1BQU0sT0FBTyxHQUFHLFlBQVc7WUFDekIsSUFBSTtJQUNGLFlBQUEsYUFBYSxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxZQUFBLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN2QyxhQUFhLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUNuQixnQkFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLGFBQUE7SUFDRixTQUFBO0lBQUMsUUFBQSxPQUFPLEtBQUssRUFBRTtJQUNkLFlBQUEsYUFBYSxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtJQUNqQixnQkFBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLGFBQUE7SUFDRixTQUFBO0lBQ0gsS0FBQyxDQUFDO1FBRUZDLGVBQVMsQ0FBQyxNQUFLO0lBQ2IsUUFBQSxPQUFPLEVBQUUsQ0FBQztTQUNYLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFUCxPQUFPO1lBQ0wsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTztZQUMzQixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7SUFDdkIsUUFBQSxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
