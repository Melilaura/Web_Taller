import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, vitest } from "vitest";
import { useWinesStore } from "../wines";

describe("Wines Store", () => {
    vi.mock("firebase/storage", () => {

        const getStorage = vitest.fn(() => Promise.resolve(undefined));
        const ref = vitest.fn(() => Promise.resolve(undefined));
        const uploadBytes = vitest.fn(() => Promise.resolve(undefined));

        return {
            getStorage,
            ref,
            uploadBytes,
        };
    }); 

    vi.mock("../firebase/config", () => ({ auth: "mock" }))

    beforeEach(() => {
        setActivePinia(createPinia());
    });


   
  

})