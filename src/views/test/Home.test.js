import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Home from "../Home.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Home test', () => {
    it("Renders", () => {
        const wrapper = mount(Home, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })