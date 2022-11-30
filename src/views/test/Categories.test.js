import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Categories from "../Categories.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Categories test', () => {
    it("Renders", () => {
        const wrapper = mount(Categories, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })