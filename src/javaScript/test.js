async function loadWasm(path, importObject = {}) {
    try {
        console.log("try start")
        // Fetch and compile the WebAssembly module
        const response = await fetch(path);
        console.log("fetched wasm")
        if (!response.ok) {
            console.log("fetched not ok")
            throw new Error(`Failed to load WASM file: ${response.statusText}`);
        }
        console.log("end of if")
        const bytes = await response.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(bytes, importObject);

        return instance.exports; // Return exported functions
    } catch (err) {
        console.log("cached error")
        console.error("Error loading WebAssembly:", err);
        return null;
    }
}

// Example usage
(async () => {
    // Import object (optional) — can pass JS functions to WASM
    const imports = {
        env: {
            jsLog: (value) => console.log("WASM says:", value)
        }
    };

    console.log("test1")
    const wasmExports = await loadWasm("../../build/fluid_sim.wasm", imports);
    console.log("test2")

    if (wasmExports) {
        console.log("test3")
        // Call an exported WASM function (e.g., add)
        if (typeof wasmExports.test_c === "function") {
            const result = wasmExports.test_c();
            console.log("Result from WASM test_c:", result);
        } else {
            console.warn("No 'test_c' function found in WASM exports.");
        }
    }
    console.log("test4")
})();