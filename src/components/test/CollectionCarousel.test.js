import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CollectionCarousel from "../CollectionCarousel.vue";
import { createTestingPinia } from '@pinia/testing'

describe("CollectionCarousel test", () => {
   it("Should render the CollectionCarousel correctly", () => {
       const wrapper = mount(CollectionCarousel, {
           global: {
             plugins: [createTestingPinia()],
           },
         });
   })

})