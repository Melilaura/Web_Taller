import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import AboutUs from "../AboutUs.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('AboutUs test', () => {
    it("Renders", () => {
        const wrapper = mount(AboutUs, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })