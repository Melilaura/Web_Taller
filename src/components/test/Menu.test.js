/**
 * @vitest-environment happy-dom
 */
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import Menu from "../Menu.vue";
 import { createTestingPinia } from '@pinia/testing'

 describe("Menu test", () => {
    it("Should render the Menu correctly", () => {
        const wrapper = mount(Menu, {
            global: {
              plugins: [createTestingPinia()],
            },
          });
    })


    it("Should not render the add items button if user is not the admin", () => {
        const wrapper = mount(Menu, {
            global: {
              plugins: [createTestingPinia()],
            },
  
            data() {
              return {
                isAdmin: false
              }
            }
          });
  
          expect(wrapper.find('.add product').exists()).toBeFalsy()
      })


      it("Should render the modal if a not available page", async () => {
        const wrapper = mount(Menu, {
            global: {
              plugins: [createTestingPinia()],
            },
  
            data() {
              return {
                showModal: false
              }
            }
  
          });
  
          expect(wrapper.find("showModal").exists()).toBeFalsy()
      })

      it("Should render the modal", async () => {  
        const wrapper = mount(Menu, {
            global: {
              plugins: [createTestingPinia()],
            },
  
            data() {
              return {
                toggleModal: false
              }
            }
  
          });
  
          expect(wrapper.find("toggleModal").exists()).toBeFalsy()
      })

    

 })