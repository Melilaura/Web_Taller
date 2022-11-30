import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Login from "../Login.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Login test', () => {
    it("Renders", () => {
        const wrapper = mount(Login, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })