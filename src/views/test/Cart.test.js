import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Cart from "../Cart.vue";
 import { createTestingPinia } from '@pinia/testing'
 
 describe('Cart test', () => {
    it("Renders", () => {
        const wrapper = mount(Cart, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })

    
 })