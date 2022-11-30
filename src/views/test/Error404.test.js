import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Error404 from "../404Error.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Error404 test', () => {
    it("Renders", () => {
        const wrapper = mount(Error404, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })