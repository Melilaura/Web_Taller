import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Footer from "../Footer.vue";
import { createTestingPinia } from '@pinia/testing'

describe("Footer test", () => {
   it("Should render the Footer correctly", () => {
       const wrapper = mount(Footer, {
           global: {
             plugins: [createTestingPinia()],
           },
         });
   })

})