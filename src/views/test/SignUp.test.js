import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import SignUp from "../SignUp.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('SignUp test', () => {
    it("Renders", () => {
        const wrapper = mount(SignUp, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })