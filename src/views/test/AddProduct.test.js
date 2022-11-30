import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import AddProduct from "../AddProduct.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('AddProduct test', () => {
    it("Renders", () => {
        const wrapper = mount(AddProduct, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
 })