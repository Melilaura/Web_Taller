import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ErrorModal from "../ErrorModal.vue";
import { createTestingPinia } from '@pinia/testing'

describe("Modal test", () => {
    it("Render the modal correctly", () => {
        const wrapper = mount(ErrorModal)
    })

    it("Render the modal correctly with the title", () => {
        const wrapper = mount(ErrorModal)
        expect(wrapper.find('h2').exists()).toBeTruthy()
    })

    it("Render the modal correctly with the button", () => {
        const wrapper = mount(ErrorModal)
        expect(wrapper.find('button').exists()).toBeTruthy()
    })
    
    it("should close the modal when the button is pressed", async () => {
        const wrapper = mount(ErrorModal)
        await wrapper.find('button').trigger("click")
        expect(wrapper.emitted()).toHaveProperty('close')
    })
 })