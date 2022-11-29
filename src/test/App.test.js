import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import App from "../App.vue";
 import { createTestingPinia } from '@pinia/testing'

 describe("App test", () => {
    it("Should render the main correctly", () => {
        const wrapper = mount(App, {
            global: {
              plugins: [createTestingPinia()],
            },
          });
    })
})