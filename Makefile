DIST_NAME = spotlightpainter

SCRIPT_FILES = \
	src/SpotlightPainter.ts \
	src/index.ts \
	src/glsl.d.ts \
	src/demo.ts \
	test/test.ts

EXTRA_SCRIPTS = \
	src/SpotlightPainter_FragmentShader.glsl \
	src/SpotlightPainter_VertexShader.glsl

include ./Makefile.microproject
