import createPersistedState from "vuex-persistedstate";

export default function ({ store }) {
  let storage = localStorage.getItem("bored");

  window.onNuxtReady(() => {
    createPersistedState({
      key: "bored",
      paths: []
    })(store);
  });
}
