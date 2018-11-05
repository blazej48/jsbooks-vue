import Vue from 'vue';

export function openModal(imgSrc) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  new Vue({
    el: container,
    data: {imgSrc},
    methods: {
      close() {
        this.$el.remove()
      }
    },
    template: `
        <div class="modal" @click="close">
            <img class="modal__content" :src="imgSrc"/>
        </div>
    `,
  });
}
