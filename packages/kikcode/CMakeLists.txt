cmake_minimum_required(VERSION 3.12)
project(kikcode_webassembly)

set(CMAKE_CXX_STANDARD 17)
#set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -gsource-map")

add_executable(kikcode_webassembly
    src/kikcode_constants.h
    src/kikcode_encoding.cpp
    src/kikcode_encoding.h
    src/kikcode_wrapper.cpp
    src/kikcode_wrapper.h
    src/kikcodes.cpp
    src/kikcodes.h
    src/zxing/Exception.cpp
    src/zxing/Exception.h
    src/zxing/IllegalStateException.h
    src/zxing/ReaderException.h
    src/zxing/ZXing.h
    src/zxing/common/Array.h
    src/zxing/common/Counted.h
    src/zxing/common/IllegalArgumentException.cpp
    src/zxing/common/IllegalArgumentException.h
    src/zxing/common/reedsolomon/GenericGF.cpp
    src/zxing/common/reedsolomon/GenericGF.h
    src/zxing/common/reedsolomon/GenericGFPoly.cpp
    src/zxing/common/reedsolomon/GenericGFPoly.h
    src/zxing/common/reedsolomon/ReedSolomonDecoder.cpp
    src/zxing/common/reedsolomon/ReedSolomonDecoder.h
    src/zxing/common/reedsolomon/ReedSolomonEncoder.cpp
    src/zxing/common/reedsolomon/ReedSolomonEncoder.h
    src/zxing/common/reedsolomon/ReedSolomonException.cpp
    src/zxing/common/reedsolomon/ReedSolomonException.h
)

target_include_directories(kikcode_webassembly PRIVATE src src/zxing src/zxing/common src/zxing/common/reedsolomon)

set_target_properties(kikcode_webassembly PROPERTIES
    LINK_FLAGS "\
    --bind \
    -s SINGLE_FILE=1 \
    -s EXPORT_ES6=1 \
    -s MODULARIZE=1 \
    -s EXPORTED_FUNCTIONS='[\"_kikcode_encode\", \"_kikcode_decode\", \"_malloc\", \"_free\"]' \
    -s EXPORTED_RUNTIME_METHODS='[\"cwrap\", \"ccall\", \"getValue\", \"setValue\"]' \
")
