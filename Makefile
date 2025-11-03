all: fluid_sim html#all other compiled things

clean:
	rm -rf build


fluid_sim: emscripten src/c/fluid_sim.c
	emcc src/c/fluid_sim.c -o build/fluid_sim.wasm
		
html:
	http-server -c01


build: 
	mkdir build
build/dependancys:
	mkdir build/dependancys	
build/dependancys/emscripten:
	mkdir build/dependancys/emscripten
	git clone https://github.com/emscripten-core/emsdk.git build/dependancys/emscripten
	cd build/dependancys/emscripten
	git pull
	./emsdk install latest #permition denied
	./emsdk activate latest
	source ./emsdk_env.sh

dependancys_folder: build build/dependancys
emscripten_folder: dependancys_folder build/dependancys/emscripten

emscripten: emscripten_folder
	