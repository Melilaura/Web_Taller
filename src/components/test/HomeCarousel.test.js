import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeCarousel from "../HomeCarousel.vue";
import { createTestingPinia } from '@pinia/testing'

describe("HomeCarousel test", () => {
   it("Should render the HomeCarousel correctly", () => {
       const wrapper = mount(HomeCarousel, {
           global: {
             plugins: [createTestingPinia()],
           },
         });
   })

})