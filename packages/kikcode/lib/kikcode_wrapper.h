#ifndef KIKCODES_WRAPPER_H
#define KIKCODES_WRAPPER_H

#include <cstdint>
#include <vector>

extern "C" {
    uint8_t* kikcode_encode(const uint8_t* data, int dataSize);
    uint8_t* kikcode_decode(const uint8_t* data, int dataSize, int *outputSize);
}

#endif // KIKCODES_WRAPPER_H