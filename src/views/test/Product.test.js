import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Product from "../Product.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Product test', () => {
    it("Renders", () => {
        const wrapper = mount(Product, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })