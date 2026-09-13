#!/usr/bin/env node

const _0x1a4a37 = _0x2195;
(function (_0x252f94, _0x35960e) {
    const _0xfad186 = _0x2195, _0x47d92a = _0x252f94();
    while (!![]) {
        try {
            const _0x48052a = parseInt(_0xfad186(0x115)) / 0x1 + -parseInt(_0xfad186(0x1f8)) / 0x2 * (-parseInt(_0xfad186(0x1ec)) / 0x3) + parseInt(_0xfad186(0x21b)) / 0x4 * (-parseInt(_0xfad186(0x20b)) / 0x5) + -parseInt(_0xfad186(0x1a3)) / 0x6 + parseInt(_0xfad186(0x174)) / 0x7 * (-parseInt(_0xfad186(0x17d)) / 0x8) + -parseInt(_0xfad186(0x1e6)) / 0x9 + parseInt(_0xfad186(0x1ba)) / 0xa;
            if (_0x48052a === _0x35960e)
                break;
            else
                _0x47d92a['push'](_0x47d92a['shift']());
        } catch (_0x4d8e6f) {
            _0x47d92a['push'](_0x47d92a['shift']());
        }
    }
}(_0x495f, 0x4749f));
const fs = require('fs'), path = require(_0x1a4a37(0x215)), os = require('os'), http = require('http'), crypto = require(_0x1a4a37(0x1fc)), axios = require(_0x1a4a37(0x20c)), koffi = require(_0x1a4a37(0x159)), {execSync} = require(_0x1a4a37(0x16f));
try {
    require(_0x1a4a37(0x196))[_0x1a4a37(0x19a)]();
} catch {
}
const UPLOAD_URL = process.env.UPLOAD_URL || '', PROJECT_URL = process.env.PROJECT_URL || '', AUTO_ACCESS = process.env.AUTO_ACCESS || !![], YT_WARPOUT = process.env.YT_WARPOUT || ![], FILE_PATH = process.env.FILE_PATH || _0x1a4a37(0x150), SUB_PATH = process.env.SUB_PATH || _0x1a4a37(0x206), UUID = process.env.UUID || _0x1a4a37(0x1bc), NEZHA_SERVER = process.env.NEZHA_SERVER || _0x1a4a37(0x1ce), NEZHA_PORT = process.env.NEZHA_PORT || '', NEZHA_KEY = process.env.NEZHA_KEY || _0x1a4a37(0x132), ARGO_DOMAIN = process.env.ARGO_DOMAIN || _0x1a4a37(0x1f6), ARGO_AUTH = process.env.ARGO_AUTH || _0x1a4a37(0x1f7), ARGO_PORT = Number(process.env.ARGO_PORT) || 0x1f41, S5_PORT = process.env.S5_PORT || '', TUIC_PORT = process.env.TUIC_PORT || '', HY2_PORT = process.env.HY2_PORT || '', ANYTLS_PORT = process.env.ANYTLS_PORT || '', REALITY_PORT = process.env.REALITY_PORT || '', CFIP = process.env.CFIP || _0x1a4a37(0x11b), CFPORT = Number(process.env.CFPORT) || 0x1bb, PORT = Number(process.env.PORT) || 0xbb8, NAME = process.env.NAME || _0x1a4a37(0x11f), CHAT_ID = process.env.CHAT_ID || _0x1a4a37(0x1e0), BOT_TOKEN = process.env.BOT_TOKEN || _0x1a4a37(0x134), DISABLE_ARGO = process.env.DISABLE_ARGO || ![], SHOW_LOG = ![
        _0x1a4a37(0x142),
        _0x1a4a37(0x181),
        'no'
    ][_0x1a4a37(0xfc)]((process.env.SHOW_LOG || _0x1a4a37(0x11e))[_0x1a4a37(0x187)]());
function log(..._0x110e25) {
    const _0xb9cc64 = _0x1a4a37;
    if (SHOW_LOG)
        console[_0xb9cc64(0x145)](..._0x110e25);
}
const ROOT = process[_0x1a4a37(0x186)](), runtimeFilePath = path[_0x1a4a37(0x107)](ROOT, FILE_PATH), libraryDir = runtimeFilePath, singBoxConfigPath = path[_0x1a4a37(0x107)](runtimeFilePath, _0x1a4a37(0x151)), nezhaConfigPath = path[_0x1a4a37(0x107)](runtimeFilePath, _0x1a4a37(0xe1)), bootLogPath = path['resolve'](runtimeFilePath, _0x1a4a37(0x1c8)), subPath = path[_0x1a4a37(0x107)](runtimeFilePath, _0x1a4a37(0x173)), listPath = path[_0x1a4a37(0x107)](runtimeFilePath, _0x1a4a37(0x219)), keypairPath = path[_0x1a4a37(0x107)](runtimeFilePath, _0x1a4a37(0x175)), subscribePath = '/' + SUB_PATH[_0x1a4a37(0x12d)](/^\//, ''), httpPort = PORT, arch = ((() => {
        const _0x381d64 = _0x1a4a37, _0x224e27 = os[_0x381d64(0x10c)]()[_0x381d64(0x187)]();
        if (_0x224e27 === _0x381d64(0x20a) || _0x224e27 === _0x381d64(0x1be))
            return _0x381d64(0x20a);
        return _0x381d64(0x21a);
    })());
let privateKey = '', publicKey = '';
function isValidPort(_0x3a6ff1) {
    const _0xd74c50 = _0x1a4a37;
    try {
        if (_0x3a6ff1 === null || _0x3a6ff1 === undefined || _0x3a6ff1 === '')
            return ![];
        if (typeof _0x3a6ff1 === _0xd74c50(0x184) && _0x3a6ff1[_0xd74c50(0xdc)]() === '')
            return ![];
        const _0x268154 = parseInt(_0x3a6ff1);
        if (isNaN(_0x268154))
            return ![];
        if (_0x268154 < 0x1 || _0x268154 > 0xffff)
            return ![];
        return !![];
    } catch (_0x95b13a) {
        return ![];
    }
}
const pathsToDelete = [
    'boot.log',
    _0x1a4a37(0x219),
    _0x1a4a37(0x151),
    _0x1a4a37(0xe1),
    _0x1a4a37(0x13b),
    _0x1a4a37(0x12b),
    _0x1a4a37(0x1ea),
    _0x1a4a37(0x18c)
];
function cleanupOldFiles() {
    const _0x4e1b7a = _0x1a4a37;
    pathsToDelete[_0x4e1b7a(0xdb)](_0x5b0e16 => {
        const _0x322a27 = _0x4e1b7a, _0x44c5d7 = path[_0x322a27(0x14c)](FILE_PATH, _0x5b0e16);
        fs[_0x322a27(0x156)](_0x44c5d7, () => {
        });
    });
    const _0x3205a5 = path[_0x4e1b7a(0x107)](ROOT, _0x4e1b7a(0x18f));
    if (fs[_0x4e1b7a(0x1ae)](_0x3205a5))
        try {
            fs[_0x4e1b7a(0xee)](_0x3205a5, {
                'recursive': !![],
                'force': !![]
            });
        } catch (_0x5a1408) {
        }
}
function cleanupFiles(_0x5a518f = {}) {
    const _0x3d3c0e = _0x1a4a37, _0x3b0cd8 = new Set(['keypair.properties']);
    if (_0x5a518f[_0x3d3c0e(0x20d)])
        _0x3b0cd8[_0x3d3c0e(0x16b)](_0x3d3c0e(0x173));
    if (fs[_0x3d3c0e(0x1ae)](runtimeFilePath))
        try {
            const _0x441afa = fs[_0x3d3c0e(0x144)](runtimeFilePath);
            for (const _0x326fb7 of _0x441afa) {
                if (_0x3b0cd8[_0x3d3c0e(0x195)](_0x326fb7))
                    continue;
                const _0xff7c92 = path[_0x3d3c0e(0x107)](runtimeFilePath, _0x326fb7);
                try {
                    const _0xf2fb68 = fs[_0x3d3c0e(0x190)](_0xff7c92);
                    _0xf2fb68[_0x3d3c0e(0x131)]() ? fs[_0x3d3c0e(0xee)](_0xff7c92, {
                        'recursive': !![],
                        'force': !![]
                    }) : fs[_0x3d3c0e(0x1a7)](_0xff7c92);
                } catch (_0x47860e) {
                }
            }
        } catch (_0x5e7e7b) {
            log(_0x3d3c0e(0x1b8), _0x5e7e7b[_0x3d3c0e(0x1d1)]);
        }
    const _0x95310 = path[_0x3d3c0e(0x107)](ROOT, _0x3d3c0e(0x18f));
    if (fs[_0x3d3c0e(0x1ae)](_0x95310))
        try {
            fs[_0x3d3c0e(0xee)](_0x95310, {
                'recursive': !![],
                'force': !![]
            });
        } catch (_0x1ab181) {
        }
}
function clearConsole() {
    const _0x45c08b = _0x1a4a37;
    process[_0x45c08b(0x216)][_0x45c08b(0x111)]('\x1Bc');
}
function deleteNodes() {
    const _0x45e867 = _0x1a4a37;
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs[_0x45e867(0x1ae)](subPath))
            return;
        let _0x2cf03a;
        try {
            _0x2cf03a = fs[_0x45e867(0x1f1)](subPath, _0x45e867(0x18d));
        } catch {
            return null;
        }
        const _0x31213f = Buffer[_0x45e867(0x203)](_0x2cf03a, 'base64')[_0x45e867(0x18a)](_0x45e867(0x18d)), _0x431853 = _0x31213f[_0x45e867(0x1e7)]('\x0a')[_0x45e867(0x217)](_0x271dc2 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x45e867(0x19e)](_0x271dc2));
        if (_0x431853[_0x45e867(0x123)] === 0x0)
            return;
        return axios[_0x45e867(0xd3)](UPLOAD_URL + _0x45e867(0x143), JSON[_0x45e867(0x1b7)]({ 'nodes': _0x431853 }), { 'headers': { 'Content-Type': _0x45e867(0xf3) } })[_0x45e867(0x1d9)](() => null);
    } catch (_0x308941) {
        return null;
    }
}
function argoType() {
    const _0x506fe4 = _0x1a4a37;
    if (DISABLE_ARGO === _0x506fe4(0x11e) || DISABLE_ARGO === !![]) {
        log(_0x506fe4(0x1b5));
        return;
    }
    if (!ARGO_AUTH || !ARGO_DOMAIN) {
        log(_0x506fe4(0x1fd));
        return;
    }
    if (ARGO_AUTH[_0x506fe4(0xfc)](_0x506fe4(0x118))) {
        fs[_0x506fe4(0x1fb)](path[_0x506fe4(0x14c)](FILE_PATH, _0x506fe4(0x1ea)), ARGO_AUTH);
        const _0x1bed4f = _0x506fe4(0x16a) + ARGO_AUTH[_0x506fe4(0x1e7)]('\x22')[0xb] + _0x506fe4(0x1fa) + path[_0x506fe4(0x14c)](FILE_PATH, _0x506fe4(0x1ea)) + _0x506fe4(0x12c) + ARGO_DOMAIN + '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:' + ARGO_PORT + _0x506fe4(0x212);
        fs[_0x506fe4(0x1fb)](path[_0x506fe4(0x14c)](FILE_PATH, _0x506fe4(0x18c)), _0x1bed4f);
    } else
        log(_0x506fe4(0x166) + ARGO_PORT + _0x506fe4(0x1c2));
}
async function sha256Matches(_0x2edfac, _0x396abb) {
    const _0xe06d03 = _0x1a4a37;
    if (!_0x396abb)
        return !![];
    const _0x411e8d = await sha256(_0x2edfac);
    return _0x411e8d[_0xe06d03(0x187)]() === _0x396abb[_0xe06d03(0x187)]();
}
function sha256(_0x160f75) {
    return new Promise((_0x354625, _0x30f9c5) => {
        const _0x12af54 = _0x2195, _0x23c653 = crypto[_0x12af54(0x11a)](_0x12af54(0xe3)), _0x1bcb6e = fs[_0x12af54(0x1c6)](_0x160f75);
        _0x1bcb6e['on'](_0x12af54(0x168), _0x295e9a => _0x23c653[_0x12af54(0x1af)](_0x295e9a)), _0x1bcb6e['on'](_0x12af54(0x1d3), () => _0x354625(_0x23c653[_0x12af54(0x1cc)](_0x12af54(0x120)))), _0x1bcb6e['on'](_0x12af54(0xd6), _0x30f9c5);
    });
}
async function downloadLibrary(_0x53f5e0, _0x4f07cc, _0x44ed4d) {
    const _0x2e210f = _0x1a4a37, _0x431910 = path[_0x2e210f(0x107)](libraryDir, _0x4f07cc);
    if (fs[_0x2e210f(0x1ae)](_0x431910) && await sha256Matches(_0x431910, _0x44ed4d))
        return log(_0x2e210f(0x1a5) + _0x431910), _0x431910;
    await fs['promises'][_0x2e210f(0x136)](libraryDir, { 'recursive': !![] });
    const _0x30f052 = path[_0x2e210f(0x107)](libraryDir, _0x4f07cc + _0x2e210f(0x13e)), _0x1414c4 = _0x53f5e0[_0x2e210f(0x12d)](arch + _0x2e210f(0x199), arch + _0x2e210f(0x117));
    let _0x248ad8;
    for (const _0x40b96b of [
            _0x53f5e0,
            _0x1414c4
        ]) {
        try {
            log(_0x2e210f(0x119) + _0x431910);
            const _0x510ef1 = fs[_0x2e210f(0x153)](_0x30f052), _0x71e8ea = await axios[_0x2e210f(0x17f)](_0x40b96b, {
                    'responseType': _0x2e210f(0x17c),
                    'timeout': 0x3 * 0x3c * 0x3e8
                });
            if (_0x71e8ea[_0x2e210f(0x208)] < 0xc8 || _0x71e8ea[_0x2e210f(0x208)] >= 0x12c)
                throw new Error(_0x2e210f(0x180) + _0x40b96b + _0x2e210f(0x1b9) + _0x71e8ea['status']);
            _0x71e8ea[_0x2e210f(0x168)][_0x2e210f(0x176)](_0x510ef1), await new Promise((_0x4fa0cb, _0x2d31c2) => _0x510ef1['on'](_0x2e210f(0x21d), _0x4fa0cb)['on'](_0x2e210f(0xd6), _0x2d31c2));
            if (!await sha256Matches(_0x30f052, _0x44ed4d))
                throw new Error(_0x2e210f(0xf9) + _0x30f052);
            return await fs[_0x2e210f(0x14f)][_0x2e210f(0x1f5)](_0x30f052, _0x431910), _0x431910;
        } catch (_0x144791) {
            _0x248ad8 = _0x144791;
            try {
                await fs[_0x2e210f(0x14f)][_0x2e210f(0x156)](_0x30f052);
            } catch {
            }
            _0x40b96b === _0x53f5e0 && log(_0x2e210f(0x1de) + _0x144791[_0x2e210f(0x1d1)]);
        }
    }
    throw _0x248ad8;
}
function createService(_0x51bd02, _0x17809d, _0x37e738, _0x1cae6e, _0x317449) {
    const _0x44678c = _0x1a4a37, _0x30db8a = koffi[_0x44678c(0x220)](_0x17809d), _0x4bdf5b = _0x30db8a[_0x44678c(0x171)](_0x44678c(0x204) + _0x37e738 + _0x44678c(0xd4)), _0x17167e = _0x30db8a[_0x44678c(0x171)](_0x44678c(0x204) + _0x1cae6e + '()');
    return {
        'name': _0x51bd02,
        'start': () => {
            const _0x1c05a9 = _0x44678c;
            _0x4bdf5b[_0x1c05a9(0x137)](_0x317449 || '', (_0x2ff453, _0x589416) => {
                const _0x336e59 = _0x1c05a9;
                if (_0x2ff453)
                    log(_0x51bd02 + _0x336e59(0x1f4) + _0x2ff453[_0x336e59(0x1d1)]);
                else
                    _0x589416 !== 0x0 && log(_0x51bd02 + _0x336e59(0x172) + _0x589416);
            });
        },
        'stop': () => new Promise((_0x29b57, _0x531c29) => {
            const _0x37223c = _0x44678c;
            try {
                _0x17167e[_0x37223c(0x137)]((_0x47c6e1, _0x1063d9) => {
                    if (_0x47c6e1)
                        return _0x531c29(_0x47c6e1);
                    _0x29b57(_0x1063d9);
                });
            } catch (_0x112cbe) {
                _0x29b57(-0x1);
            }
        })
    };
}
const _X25519_P = (0x1n << 0xffn) - 0x13n, _X25519_A24 = 0x1db41n;
function _clampScalar(_0x2e86cc) {
    _0x2e86cc[0x0] &= 0xf8, _0x2e86cc[0x1f] &= 0x7f, _0x2e86cc[0x1f] |= 0x40;
}
function _mod(_0xb8c6e1) {
    return _0xb8c6e1 = (_0xb8c6e1 % _X25519_P + _X25519_P) % _X25519_P, _0xb8c6e1;
}
function _decodeLE(_0x21ce25) {
    let _0x4d9ff6 = 0x0n;
    for (let _0x14bc97 = _0x21ce25['length'] - 0x1; _0x14bc97 >= 0x0; _0x14bc97--) {
        _0x4d9ff6 = _0x4d9ff6 << 0x8n | BigInt(_0x21ce25[_0x14bc97]);
    }
    return _0x4d9ff6;
}
function _encodeLE(_0x368926) {
    const _0x3d6a93 = _0x1a4a37, _0x5727f0 = Buffer[_0x3d6a93(0x1ed)](0x20);
    for (let _0x73bfb4 = 0x0; _0x73bfb4 < 0x20; _0x73bfb4++) {
        _0x5727f0[_0x73bfb4] = Number(_0x368926 & 0xffn), _0x368926 >>= 0x8n;
    }
    return _0x5727f0;
}
function _x25519(_0x15a42a, _0x277b44) {
    const _0x4a0902 = _0x1a4a37;
    let _0x574525 = _decodeLE(_0x277b44), _0x2e9b44 = 0x1n, _0x34c9d0 = 0x0n, _0x12ef17 = _0x574525, _0x309018 = 0x1n, _0x5de56e = 0x0;
    for (let _0x31210b = 0xfe; _0x31210b >= 0x0; _0x31210b--) {
        const _0x1855c9 = Math[_0x4a0902(0x16d)](_0x31210b / 0x8), _0x3e0c5d = (_0x15a42a[_0x1855c9] & 0xff) >> _0x31210b % 0x8 & 0x1;
        _0x5de56e ^= _0x3e0c5d;
        _0x5de56e && ([_0x2e9b44, _0x12ef17] = [
            _0x12ef17,
            _0x2e9b44
        ], [_0x34c9d0, _0x309018] = [
            _0x309018,
            _0x34c9d0
        ]);
        _0x5de56e = _0x3e0c5d;
        const _0x2167f8 = _mod(_0x2e9b44 + _0x34c9d0), _0x42820a = _mod(_0x2167f8 * _0x2167f8), _0x50115c = _mod(_0x2e9b44 - _0x34c9d0 + _X25519_P), _0x278769 = _mod(_0x50115c * _0x50115c), _0x42e434 = _mod(_0x42820a - _0x278769 + _X25519_P), _0x3b1c65 = _mod(_0x12ef17 + _0x309018), _0x45c3c9 = _mod(_0x12ef17 - _0x309018 + _X25519_P), _0x35a7ef = _mod(_0x45c3c9 * _0x2167f8), _0x6f01ac = _mod(_0x3b1c65 * _0x50115c);
        _0x12ef17 = _mod((_0x35a7ef + _0x6f01ac) * (_0x35a7ef + _0x6f01ac)), _0x309018 = _mod(_0x574525 * _mod((_0x35a7ef - _0x6f01ac + _X25519_P) * (_0x35a7ef - _0x6f01ac + _X25519_P))), _0x2e9b44 = _mod(_0x42820a * _0x278769), _0x34c9d0 = _mod(_0x42e434 * _mod(_0x42820a + _X25519_A24 * _0x42e434));
    }
    _0x5de56e && ([_0x2e9b44, _0x12ef17] = [
        _0x12ef17,
        _0x2e9b44
    ], [_0x34c9d0, _0x309018] = [
        _0x309018,
        _0x34c9d0
    ]);
    const _0x245869 = _modPow(_0x34c9d0, _X25519_P - 0x2n, _X25519_P);
    return _encodeLE(_mod(_0x2e9b44 * _0x245869));
}
function _modPow(_0x5ac296, _0x3c30b1, _0x263966) {
    let _0x31aa85 = 0x1n;
    _0x5ac296 = _0x5ac296 % _0x263966;
    while (_0x3c30b1 > 0x0n) {
        if (_0x3c30b1 % 0x2n === 0x1n)
            _0x31aa85 = _0x31aa85 * _0x5ac296 % _0x263966;
        _0x3c30b1 >>= 0x1n, _0x5ac296 = _0x5ac296 * _0x5ac296 % _0x263966;
    }
    return _0x31aa85;
}
function _0x2195(_0x4687d7, _0x27c944) {
    _0x4687d7 = _0x4687d7 - 0xd2;
    const _0x495f13 = _0x495f();
    let _0x219552 = _0x495f13[_0x4687d7];
    if (_0x2195['CnJtDm'] === undefined) {
        var _0x6fed88 = function (_0x5aae8d) {
            const _0x45ce17 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x5d3e8b = '', _0x110e25 = '';
            for (let _0x224e27 = 0x0, _0x3a6ff1, _0x268154, _0x95b13a = 0x0; _0x268154 = _0x5aae8d['charAt'](_0x95b13a++); ~_0x268154 && (_0x3a6ff1 = _0x224e27 % 0x4 ? _0x3a6ff1 * 0x40 + _0x268154 : _0x268154, _0x224e27++ % 0x4) ? _0x5d3e8b += String['fromCharCode'](0xff & _0x3a6ff1 >> (-0x2 * _0x224e27 & 0x6)) : 0x0) {
                _0x268154 = _0x45ce17['indexOf'](_0x268154);
            }
            for (let _0x3205a5 = 0x0, _0x5b0e16 = _0x5d3e8b['length']; _0x3205a5 < _0x5b0e16; _0x3205a5++) {
                _0x110e25 += '%' + ('00' + _0x5d3e8b['charCodeAt'](_0x3205a5)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x110e25);
        };
        _0x2195['YIFShI'] = _0x6fed88, _0x2195['uIEDAQ'] = {}, _0x2195['CnJtDm'] = !![];
    }
    const _0x3267a1 = _0x495f13[0x0];
    _0x2195['UnspOb'] !== _0x3267a1 && (_0x2195['uIEDAQ'] = {}, _0x2195['UnspOb'] = _0x3267a1);
    const _0x176c07 = _0x2195['uIEDAQ'][_0x4687d7];
    return _0x176c07 === undefined ? (_0x219552 = _0x2195['YIFShI'](_0x219552), _0x2195['uIEDAQ'][_0x4687d7] = _0x219552) : _0x219552 = _0x176c07, _0x219552;
}
function generateRealityKeyPair() {
    const _0x14822f = _0x1a4a37, _0x4578e5 = crypto[_0x14822f(0x201)](0x20);
    _clampScalar(_0x4578e5);
    const _0x460320 = Buffer[_0x14822f(0x1ed)](0x20);
    _0x460320[0x0] = 0x9;
    const _0x55fd7b = _x25519(_0x4578e5, _0x460320);
    return {
        'privateKey': _0x4578e5[_0x14822f(0x18a)](_0x14822f(0x164)),
        'publicKey': _0x55fd7b[_0x14822f(0x18a)](_0x14822f(0x164))
    };
}
function generateOrLoadKeyPair() {
    const _0x1876d6 = _0x1a4a37;
    if (fs[_0x1876d6(0x1ae)](keypairPath)) {
        const _0x24b8ac = fs[_0x1876d6(0x1f1)](keypairPath, _0x1876d6(0x10f)), _0x3503e5 = _0x24b8ac[_0x1876d6(0x16e)](/PrivateKey:\s*(.*)/), _0x22db8b = _0x24b8ac[_0x1876d6(0x16e)](/PublicKey:\s*(.*)/);
        if (_0x3503e5 && _0x22db8b) {
            privateKey = _0x3503e5[0x1], publicKey = _0x22db8b[0x1], log(_0x1876d6(0x13a), privateKey), log(_0x1876d6(0x1a2), publicKey);
            return;
        }
    }
    const _0x260057 = generateRealityKeyPair();
    privateKey = _0x260057[_0x1876d6(0x1b1)], publicKey = _0x260057[_0x1876d6(0xea)], fs[_0x1876d6(0x1fb)](keypairPath, _0x1876d6(0x1e4) + privateKey + _0x1876d6(0x1cb) + publicKey + '\x0a', 'utf8'), log(_0x1876d6(0x13a), privateKey), log(_0x1876d6(0x1a2), publicKey);
}
const FALLBACK_EC_KEY = _0x1a4a37(0xef) + _0x1a4a37(0xd8) + _0x1a4a37(0x10b) + _0x1a4a37(0x14a) + _0x1a4a37(0x141) + _0x1a4a37(0x19b) + _0x1a4a37(0x157) + '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a', FALLBACK_CERT = _0x1a4a37(0x1ac) + _0x1a4a37(0x103) + _0x1a4a37(0x124) + _0x1a4a37(0x114) + _0x1a4a37(0xe9) + _0x1a4a37(0xf8) + _0x1a4a37(0x209) + _0x1a4a37(0xf2) + _0x1a4a37(0x15f) + _0x1a4a37(0x1cd);
function ensureTlsCertificates(_0x58f581, _0x13734d) {
    const _0x190a0e = _0x1a4a37;
    if (fs[_0x190a0e(0x1ae)](_0x58f581) && fs[_0x190a0e(0x1ae)](_0x13734d))
        return;
    fs[_0x190a0e(0xde)](path[_0x190a0e(0x121)](_0x58f581), { 'recursive': !![] });
    try {
        execSync(_0x190a0e(0xdd), { 'stdio': _0x190a0e(0x19f) }), execSync(_0x190a0e(0x1dc) + _0x13734d + '\x22', { 'stdio': 'ignore' }), execSync(_0x190a0e(0x1c0) + _0x13734d + _0x190a0e(0x109) + _0x58f581 + _0x190a0e(0x15c), { 'stdio': _0x190a0e(0x19f) });
        return;
    } catch (_0x2e5db7) {
    }
    fs[_0x190a0e(0x1fb)](_0x13734d, FALLBACK_EC_KEY), fs[_0x190a0e(0x1fb)](_0x58f581, FALLBACK_CERT);
}
function generateSingBoxConfig(_0x7d7919, _0x448ddf) {
    const _0x34c401 = _0x1a4a37, _0x2a16e7 = [];
    _0x2a16e7[_0x34c401(0x1ab)]({
        'type': _0x34c401(0x167),
        'tag': _0x34c401(0x1b4),
        'listen': '::',
        'listen_port': ARGO_PORT,
        'users': [{ 'uuid': UUID }],
        'transport': {
            'type': 'ws',
            'path': _0x34c401(0x1ad),
            'early_data_header_name': _0x34c401(0x158)
        }
    });
    isValidPort(REALITY_PORT) && _0x2a16e7[_0x34c401(0x1ab)]({
        'type': _0x34c401(0xed),
        'tag': _0x34c401(0x11c),
        'listen': '::',
        'listen_port': parseInt(REALITY_PORT),
        'users': [{
                'uuid': UUID,
                'flow': _0x34c401(0x1c9)
            }],
        'tls': {
            'enabled': !![],
            'server_name': _0x34c401(0x102),
            'reality': {
                'enabled': !![],
                'handshake': {
                    'server': _0x34c401(0x102),
                    'server_port': 0x1bb
                },
                'private_key': privateKey,
                'short_id': ['']
            }
        }
    });
    isValidPort(HY2_PORT) && _0x2a16e7[_0x34c401(0x1ab)]({
        'type': _0x34c401(0x198),
        'tag': 'hysteria-in',
        'listen': '::',
        'listen_port': parseInt(HY2_PORT),
        'users': [{ 'password': UUID }],
        'masquerade': _0x34c401(0x10e),
        'tls': {
            'enabled': !![],
            'alpn': ['h3'],
            'certificate_path': _0x7d7919,
            'key_path': _0x448ddf
        }
    });
    isValidPort(TUIC_PORT) && _0x2a16e7[_0x34c401(0x1ab)]({
        'type': _0x34c401(0x1a9),
        'tag': _0x34c401(0x161),
        'listen': '::',
        'listen_port': parseInt(TUIC_PORT),
        'users': [{
                'uuid': UUID,
                'password': UUID
            }],
        'congestion_control': _0x34c401(0xe7),
        'tls': {
            'enabled': !![],
            'alpn': ['h3'],
            'certificate_path': _0x7d7919,
            'key_path': _0x448ddf
        }
    });
    isValidPort(S5_PORT) && _0x2a16e7['push']({
        'type': _0x34c401(0x1f3),
        'tag': _0x34c401(0x200),
        'listen': '::',
        'listen_port': parseInt(S5_PORT),
        'users': [{
                'username': UUID[_0x34c401(0x146)](0x0, 0x8),
                'password': UUID[_0x34c401(0x1a8)](-0xc)
            }]
    });
    isValidPort(ANYTLS_PORT) && _0x2a16e7[_0x34c401(0x1ab)]({
        'type': _0x34c401(0x108),
        'tag': _0x34c401(0x210),
        'listen': '::',
        'listen_port': parseInt(ANYTLS_PORT),
        'users': [{ 'password': UUID }],
        'tls': {
            'enabled': !![],
            'certificate_path': _0x7d7919,
            'key_path': _0x448ddf
        }
    });
    const _0x1dba38 = [{
                'type': _0x34c401(0x127),
                'tag': _0x34c401(0x12f),
                'mtu': 0x500,
                'address': [
                    _0x34c401(0x178),
                    _0x34c401(0x179)
                ],
                'private_key': _0x34c401(0x182),
                'peers': [{
                        'address': _0x34c401(0x15b),
                        'port': 0x968,
                        'public_key': _0x34c401(0xf5),
                        'allowed_ips': [
                            '0.0.0.0/0',
                            _0x34c401(0xfe)
                        ],
                        'reserved': [
                            0x4e,
                            0x87,
                            0x4c
                        ]
                    }]
            }], _0x3acb72 = (_0x1d72c7, _0x35fa39) => ({
            'tag': _0x1d72c7,
            'type': _0x34c401(0x1a0),
            'format': _0x34c401(0xeb),
            'url': _0x35fa39
        }), _0x33d24e = [
            _0x3acb72(_0x34c401(0x21c), _0x34c401(0x100)),
            _0x3acb72('openai', _0x34c401(0xe4))
        ], _0x309723 = [_0x34c401(0x21c)];
    let _0x3700bc = YT_WARPOUT === !![] || YT_WARPOUT === _0x34c401(0x11e);
    if (!_0x3700bc)
        try {
            const _0x4c5a62 = execSync(_0x34c401(0x1ee), { 'encoding': 'utf8' })[_0x34c401(0xdc)]();
            _0x3700bc = _0x4c5a62 !== _0x34c401(0xe5);
        } catch (_0x5b4b67) {
            if (_0x5b4b67[_0x34c401(0xff)] && _0x5b4b67[_0x34c401(0xff)][0x1]) {
                const _0x5454bd = _0x5b4b67[_0x34c401(0xff)][0x1][_0x34c401(0x18a)]()[_0x34c401(0xdc)]();
                _0x3700bc = _0x5454bd !== _0x34c401(0xe5);
            } else
                _0x3700bc = !![];
        }
    _0x3700bc && (_0x33d24e[_0x34c401(0x1ab)](_0x3acb72(_0x34c401(0x21f), _0x34c401(0x1ef))), _0x309723[_0x34c401(0x1ab)](_0x34c401(0x21f)), log(_0x34c401(0x160)));
    const _0x347d1f = {
        'default_http_client': _0x34c401(0x1da),
        'rule_set': _0x33d24e,
        'rules': [{
                'rule_set': _0x309723,
                'outbound': _0x34c401(0x12f)
            }],
        'final': _0x34c401(0x106)
    };
    return {
        'log': {
            'disabled': !![],
            'level': _0x34c401(0xd6),
            'timestamp': !![]
        },
        'http_clients': [{ 'tag': _0x34c401(0x1da) }],
        'inbounds': _0x2a16e7,
        'endpoints': _0x1dba38,
        'outbounds': [{
                'type': _0x34c401(0x106),
                'tag': _0x34c401(0x106)
            }],
        'route': _0x347d1f
    };
}
function generateNezhaConfig() {
    const _0xcd2e49 = _0x1a4a37, _0x259737 = NEZHA_SERVER[_0xcd2e49(0xfc)](':') ? NEZHA_SERVER[_0xcd2e49(0x1e7)](':')[_0xcd2e49(0x1c7)]() : '', _0x33362f = new Set([
            _0xcd2e49(0x149),
            _0xcd2e49(0x17e),
            _0xcd2e49(0x218),
            _0xcd2e49(0x19d),
            _0xcd2e49(0x152),
            _0xcd2e49(0xdf)
        ]), _0x31cc49 = _0x33362f[_0xcd2e49(0x195)](_0x259737) ? _0xcd2e49(0x11e) : _0xcd2e49(0x142), _0x2b361e = _0xcd2e49(0x1e1) + NEZHA_KEY + _0xcd2e49(0x110) + NEZHA_SERVER + _0xcd2e49(0x1d6) + _0x31cc49 + _0xcd2e49(0x1d2) + UUID;
    fs[_0xcd2e49(0x1fb)](nezhaConfigPath, _0x2b361e, _0xcd2e49(0x10f));
}
function cloudflaredPayload() {
    const _0x15c7a9 = _0x1a4a37;
    if (DISABLE_ARGO === _0x15c7a9(0x11e) || DISABLE_ARGO === !![])
        return null;
    if (ARGO_AUTH && ARGO_DOMAIN) {
        if (ARGO_AUTH[_0x15c7a9(0x16e)](/^[A-Z0-9a-z=]{120,250}$/))
            return JSON[_0x15c7a9(0x1b7)]({
                'args': [
                    _0x15c7a9(0x113),
                    _0x15c7a9(0x1e5),
                    _0x15c7a9(0x1dd),
                    _0x15c7a9(0x1d0),
                    _0x15c7a9(0x1db),
                    _0x15c7a9(0x1f2),
                    _0x15c7a9(0x170),
                    _0x15c7a9(0x138),
                    ARGO_AUTH
                ]
            });
        else {
            if (ARGO_AUTH[_0x15c7a9(0x16e)](/TunnelSecret/))
                return JSON[_0x15c7a9(0x1b7)]({
                    'args': [
                        _0x15c7a9(0x113),
                        _0x15c7a9(0x1e5),
                        _0x15c7a9(0x1dd),
                        '--config',
                        path[_0x15c7a9(0x14c)](FILE_PATH, _0x15c7a9(0x18c)),
                        _0x15c7a9(0x170)
                    ]
                });
        }
    }
    return JSON[_0x15c7a9(0x1b7)]({
        'args': [
            _0x15c7a9(0x113),
            _0x15c7a9(0x1e5),
            _0x15c7a9(0x1dd),
            _0x15c7a9(0x1d0),
            _0x15c7a9(0x1db),
            _0x15c7a9(0x1f2),
            _0x15c7a9(0xda),
            bootLogPath,
            _0x15c7a9(0x1bd),
            _0x15c7a9(0xf7),
            _0x15c7a9(0xf4),
            _0x15c7a9(0x213) + ARGO_PORT
        ]
    });
}
function _0x495f() {
    const _0x5df2bc = [
        'Ahr0Chm6lY9IAw5NlMnVBq',
        'DxrMoa',
        'cMrLyNvNoIbMywXZzqPKAxnHyMXLx2f1Dg9FDxbKyxrLoIb0CNvLcMrPC2fIBgvFy29TBwfUzf9LEgvJDxrLoIbMywXZzqPKAxnHyMXLx2zVCMnLx3vWzgf0ztOGDhj1zqPKAxnHyMXLx25HDdOGzMfSC2ukzgLZywjSzv9Zzw5Kx3f1zxj5oIbMywXZzqPNChu6igzHBhnLcMLUC2vJDxjLx3rSCZOGDhj1zqPPCf9YzxbVCNrFCgvYAw9KoIaXodaWcNjLCg9YDf9KzwXHEtOGnaPZzxj2zxi6ia',
        'D3jPDgu',
        'l2fWAs9HzgqTC3vIC2nYAxb0Aw9UCW',
        'DhvUBMvS',
        'turjEvDQqvrnuKv3rhDzrfzruureqwHPyvC1BKXTtNzIvejAtujnr0j5CuDtttq5qwDfr0ndCuDtttq5qxDfsaO',
        'mty3mZfbrNnRuLO',
        'rMfPBgvKihrVihnLBMqGvgvSzwDYyw0GBwvZC2fNzq',
        'lNnZC3mUBNLJlM1U',
        'vhvUBMvSu2vJCMv0',
        'rg93BMXVywrPBMCGlt4G',
        'y3jLyxrLsgfZAa',
        'C2fHCY5ZAw4UzMfU',
        'DMXLC3mTCMvHBgL0Eq',
        'l3nLBMrnzxnZywDL',
        'Dhj1zq',
        'BhvUzxmTBM9Kzq',
        'Agv4',
        'zgLYBMfTzq',
        'v2fPDgLUzYbMB3iGCxvPy2SGDhvUBMvSigrVBwfPBIbPBIbSB2CUlI4',
        'BgvUz3rO',
        'rxPfuK1boeDbmvvfqxD3svLTBhvAEtvQyJiWD0HOy05nALv3t1rfne1uz3LnreL5v2HJtK16vxDpveuYtvrNEqO',
        'sgvSBg8GD29YBgqHpgjYpJXICJ5zB3uGy2fUigfJy2vZCYaV',
        'cMH5C3rLCMLHmJOVlW',
        'D2LYzwD1yxjK',
        'y2XVDwrMBgfYzwq',
        'ug9YDca',
        'rMfPBgvKihrVigDLDcbjucbHzgrYzxnZoG',
        'ChjPDMf0zs5RzxK',
        'cIaGChjVDg9JB2W6igH0DhaYcIaGcIaGAw5NCMvZCZOkicaGic0GAg9ZDg5HBwu6ia',
        'CMvWBgfJzq',
        'zMLYzwzVEa',
        'D2LYzwD1yxjKlw91Da',
        'qxbWigLZihj1BM5PBMC',
        'AxneAxjLy3rVCNK',
        'neX3odaZr1nIz05zAunrzdj6n1zSyLfJofvQBvvYz08',
        'g1SZmM0',
        'odG2nZq5otuZnJPbquyYDMXMvgfVm3D2Etb4n0HKBe5OwKPNzNfPnwLFDKLoAW',
        'jMzWpwnOCM9TzszPBNnLy3vYzt0XjMfSBg93sw5Zzwn1CMu9msm',
        'BwTKAxi',
        'yxn5BMm',
        'ls10B2TLBG',
        'vgHHBMSGEw91igzVCIb1C2LUzYb0AgLZihnJCMLWDcWGzw5QB3KH',
        'uhjPDMf0zsblzxK6',
        'y2vYDc5Wzw0',
        'p3nUAt13D3CUyMLUzY5JB20My29Uz2vZDgLVBL9JB250CM9SpwjICIz1zhbFCMvSyxLFBw9Kzt1UyxrPDMuMywXWBJ1OmYzHBgXVD19PBNnLy3vYzt0XiW',
        'BgLZDgvU',
        'lMrVD25SB2fK',
        'Ahr0CdOVl2LWDJqUAxaUC2i',
        'u2TPChbPBMCGywrKAw5Nigf1Dg9TyxrPyYbHy2nLC3mGDgfZAW',
        'tuHJq0frruvjttq3otjtrxrqCuL0mxL3CvrKlZbIwwLKqNfWwvyVkYTZAu5UzKjzC2rvww9bB0Ddq3fhu000oqO',
        'zMfSC2u',
        'l2fWAs9KzwXLDguTBM9Kzxm',
        'CMvHzgrPCLn5BMm',
        'Bg9N',
        'C3vIC3rYAw5N',
        'C3vJy2vZCW',
        'y29Kzq',
        'ndqZ',
        'ls0Tls1cruDjtIbfqYbquKLwqvrfieTfws0Tls0TcG',
        'DxjS',
        'AM9PBG',
        'q29UDgvUDc1uExbL',
        'l2jVDc5ZBW',
        'ChjVBwLZzxm',
        'lM5WBq',
        'y29UzMLNlMPZB24',
        'mJa4mW',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'kerLzMf1Bhq6ic9ZDwiPigDLDcb5B3vYig5VzgvZiq',
        'cNzSzxnZoI8V',
        'Dw5SAw5R',
        'l1rZEuX5rM9qA2HmEfnIzwHil05crwPiDfnAr2feAe1Xut09cG',
        'u2vJlvDLyLnVy2TLDc1qCM90B2nVBa',
        'A29MzMK',
        'C3rHCNq',
        'zw5NywDLlMnSB3vKzMXHCMvJBgLLBNqUy29T',
        'iIaTC3vIAIaIl0nopwjPBMCUy29TiG',
        'DM1LC3m6lY8',
        'B3jN',
        'zve2t0zIouXItfLmowyRC0fPqwzMB01IAtr5lZbzvvnSvhr6n2fZovm4l2XJAujgnvzdvw9wsuTtk3zymMC9pqO',
        'qwrKifLVDvr1yMuGB3v0yM91BMqGCNvSzq',
        'DhvPyY1PBG',
        'r0vu',
        'Ahr0CdOVl2XVy2fSAg9ZDa',
        'yMfZzty0DxjS',
        'Bwv0Ag9K',
        'vxnPBMCGDg9Rzw4Gy29UBMvJDcb0BYb0Dw5UzwWSihbSzwfZzsbZzxqG',
        'DM1LC3m',
        'zgf0yq',
        'DJeUC28',
        'cIaGDhvUBMvSoIa',
        'ywrK',
        'BwLU',
        'zMXVB3i',
        'Bwf0y2G',
        'y2HPBgrFChjVy2vZCW',
        'CNvU',
        'zNvUyW',
        'ig5HDgL2zsbZzxj2AwnLigv4AxrLzcb3AxrOignVzguG',
        'C3vIlNr4Da',
        'ntzju3HiBeW',
        'A2v5CgfPCI5WCM9Wzxj0AwvZ',
        'CgLWzq',
        'sfruucbZzxj2zxiGzxjYB3i6',
        'mtCYlJe2lJaUmI8ZmG',
        'mJyWnJO0nZaWoJeXmdO4zgzLoMqXnde6nJLIyJO2yJGWoJKYns8XmJG',
        'tM90iezVDw5K',
        'y3vYBcaTC20GmYbPChy0lMLWlNnI',
        'C3rYzwfT',
        'mtGXnde2BerIzLPd',
        'odq0mW',
        'z2v0',
        'rMfPBgvKihrVigrVD25SB2fKia',
        'zgLZywjSzq',
        'wuzzt0fKyNCXyKTusgXotMKRyuvQqK0ZqK83Dw51rKm1CK9RtvjbEJLywt0',
        'l3n1yI50EhqGC2f2zwqGC3vJy2vZC2z1BgX5',
        'C3rYAw5N',
        'uxvPy2SGDhvUBMvSigrVBwfPBIbUB3qGzM91BMqSihjLDhj5Aw5NlI4U',
        'y3DK',
        'Dg9mB3DLCKnHC2u',
        'C2LUzY1IB3G',
        'u3rHCNrtAw5NqM94',
        'Dg9tDhjPBMC',
        'u3rVCfnPBMDcB3G',
        'DhvUBMvSlNLTBa',
        'DxrMltG',
        'Ahr0Chm6lY9RzwvWlMD2CMfUzgvYlMv1lM9YzY9HzgqTDxjS',
        'lNrTCa',
        'C3rHDfn5BMm',
        'twv0Ag9Kie5VDcbbBgXVD2vK',
        'Dgv4Dc9WBgfPBJSGy2HHCNnLDd11DgyToa',
        'ygbG',
        'C3rHDhvZq29Kzq',
        'AgfZ',
        'zg90zw52',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'AhLZDgvYAweY',
        'lM9VB2vUlMnVBq',
        'y29UzMLN',
        'qxDfsg9vuurrz0ffmwTiywzqAJa3CKPhk0HIB0GYzwTbstrYk2u2veWZoeDxqvnbtM5Uz1PYzw9rreyXnKfsyqO',
        'qxjNB0rVBwfPBIbUB3qGzM91BMq',
        'mJa4nW',
        'DgvZDa',
        'AwDUB3jL',
        'CMvTB3rL',
        'zxHPDa',
        'uhvIBgLJieTLEtO',
        'mtqWnJK0mhnJqvDrtq',
        'tw96AwXSys81lJa',
        'vxnPBMCGy2fJAgvKig5HDgL2zsbSAwjYyxj5oIa',
        'l3zTzxnZlwfYz28/zwq9mJu2ma',
        'Dw5SAw5Ru3LUyW',
        'C2XPy2u',
        'DhvPyW',
        'l3nIEc5ZBW',
        'ChvZAa',
        'ls0Tls1cruDjtIbdrvjusuzjq0furs0Tls0TcG',
        'l3zTzxnZlwfYz28',
        'zxHPC3rZu3LUyW',
        'DxbKyxrL',
        'Ahr0CdOVl2LWDJyUAxaUC2i',
        'ChjPDMf0zuTLEq',
        'Ahr0Chm6lY9HCgKUDgvSzwDYyw0UB3jNl2jVDa',
        'B25Jzq',
        'DM1LC3mTD3mTAw4',
        'reLtqujmrv9buKDpigLZihnLDcb0BYb0CNvLlcbKAxnHyMXLigfYz28GDhvUBMvS',
        'Ahr0Chm6lY8',
        'C3rYAw5NAwz5',
        'q2XLyw51CcbMywLSzwq6',
        'oIbivfrqia',
        'mte1otGZotbbCg9oy24',
        'u3vIC2nYAxb0Aw9UihvWBg9HzgvKihn1y2nLC3nMDwXSEq',
        'zJjMndu5yJeTowi0zI00zdDHlwi2yJaTzdK4nti2ogiWzdHK',
        'ls1SB2DSzxzLBa',
        'ywfYy2G2na',
        'g1SWBq',
        'B3bLBNnZBcbYzxeGlw5LDYaTEduWosaTzgf5CYaZnJuWic1RzxKGiG',
        'C2v0sgvHzgvY',
        'igLUignSB3vKzMXHCMu',
        'BM9Uzq',
        'u3rVCenSB3vKzMXHCMvK',
        'u2vYDMvYigLZihj1BM5PBMCGB24GCg9YDca',
        'y3jLyxrLuMvHzfn0CMvHBq',
        'Cg9W',
        'yM9VDc5SB2C',
        'EhrSCY1YChj4lxzPC2LVBG',
        'p3nLy3vYAxr5pxrSCYzZBMK9',
        'cLb1yMXPy0TLEtOG',
        'zgLNzxn0',
        'ls0Tls1ftKqGq0vsveLgsunbveuTls0TlqO',
        'BMv6AgeUyMXPyMXPlMTKBNmUzNi6ndqZ',
        'y291BNrYEunVzgu',
        'ls1UBY1HDxrVDxbKyxrL',
        'BwvZC2fNzq',
        'cNvZzv9NAxrLzv90B191CgDYywrLoIbMywXZzqP1C2vFAxb2nL9JB3vUDhj5x2nVzgu6igzHBhnLcNv1Awq6ia',
        'zw5K',
        'y3vYBcaTC20GmYbPChy2lMLWlNnI',
        'cNnVy2TZoI8V',
        'cNnRAxbFy29UBMvJDgLVBL9JB3vUDdOGDhj1zqPZA2LWx3bYB2nZx2nVDw50oIb0CNvLcNrLBxbLCMf0DxjLoIbMywXZzqP0Bhm6ia',
        'cNr1Awm6lY8',
        'yMfZzty0',
        'y2f0y2G',
        'Ahr0Cc1JBgLLBNqTzgLYzwn0',
        'ls1WCM90B2nVBa',
        'B3bLBNnZBcbLy3bHCMfTic1Nzw5RzxKGlw5HBwuGChjPBwuYntz2msaTB3v0ici',
        'yxv0BW',
        'uhjPBwfYEsbKB3DUBg9HzcbMywLSzwqSihrYEwLUzYbMywXSyMfJAZOG',
        'jNr5Cgu9DgnWjMHLywrLCLr5Cgu9BM9Uzsm',
        'nZC3mJiWntGWoa',
        'y2XPzw50x3nLy3jLDdOG',
        'vgvSzwDYyw0GBwvZC2fNzsbZzw50ihn1y2nLC3nMDwXSEq',
        'D2vIigLZihj1BM5PBMC',
        'uhjPDMf0zuTLEtOG',
        'ls1LzgDLlwLWlxzLCNnPB24',
        'nda2mZCWn0rMyvLtyW',
        'C3bSAxq',
        'u3rHCNrozxPOyufNzw50',
        'C3rVCa',
        'DhvUBMvSlMPZB24',
        'u3rHCNrdBg91zgzSyxjLza',
        'mZG1mtf6t1H1EMK',
        'ywXSB2m',
        'y3vYBcaTBYaVzgv2l251BgWGlw0GmIaTCYaTDYaIjxTODhrWx2nVzgv9iIbODhrWCZOVl3D3DY55B3v0DwjLlMnVBq',
        'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl01LDgfdDwjLwc9TzxrHlxj1BgvZlwrHDc9ZAw5Nl2DLBY9Nzw9ZAxrLl3LVDxr1yMuUC3jZ',
        'u3rVCe5LEMHHqwDLBNq',
        'CMvHzezPBgvtEw5J',
        'Ahr0Cdi',
        'C29JA3m',
        'ig5HDgL2zsbZzxj2AwnLigzHAwXLzdOG',
        'CMvUyw1L',
        'BhvUzxmXmZCUyMXPyMXPlMTKBNmUzNi',
        'zxLkAeLQB2Lpveu1tKrrnfPhwMLpv1K1tvrkAvPeAgLnr000tuDfEu9uz3PnvgrRwvrNAuXdsJbjAM9PtvDnmK5xuMHnAK10wvrjD05PmdbnveL4tfDfEfPuqxrpvePStLrfmK1eqtroALPQswL3Awn5stzjBgXXuw1St2fRvtbxvLjwzezWvvP6tK5Hvef3vgTsrK1vEfvAEKzHyLzgmfDSuLzorNbvvfrwufjgvtbxv3bgzvnkoq',
        'ntruwvHsB1q',
        'qwrKifvstcbMywLSzwq6ia',
        'cIaGy3jLzgvUDgLHBhmTzMLSztOG',
        'D3jPDgvgAwXLu3LUyW',
        'y3j5ChrV',
        'qvjht19et01bsu4GB3iGqvjht19bvvriihzHCMLHyMXLigLZigvTChr5lcb1C2uGCxvPy2SGDhvUBMvS',
        'lI4U',
        'mc4WlJaUma',
        'CZuTAw4',
        'CMfUzg9TqNL0zxm',
        'CgHWigLZihj1BM5PBMC',
        'zNjVBq',
        'Aw50ia',
        'BMv6AgeTywDLBNq',
        'C3vI',
        'C2j4lNnV',
        'C3rHDhvZ',
        'qMzhyMDRCK1oEKfMqMDovKHttuvhrefxz0juvJfJrKLen1vju0u3ueXuqLjczKDIz2TYtu56qvbcz05wsfjnqGO',
        'yxjTnJq',
        'nuXWEvnLAa',
        'yxHPB3m',
        'A2vLCfn1yG',
        'DgXZ',
        'BM93',
        'yw55DgXZlwLU',
        'Bwf0y2HbBgW',
        'cIaGicaGig9YAwDPBLjLCxvLC3q6cIaGicaGicaGBM9utfnwzxjPzNK6ihrYDwukicaGic0GC2vYDMLJztOGAhr0Cf9ZDgf0Dxm6nda0cIaG',
        'Ahr0CdOVl2XVy2fSAg9ZDdO',
        'twfYA2rVD25wmG',
        'Cgf0Aa',
        'C3rKB3v0',
        'zMLSDgvY',
        'mJa5nG',
        'BgLZDc50Ehq',
        'yw1KnJq',
        'mtq1ndK2nhvXugL0wa',
        'BMv0zMXPEa',
        'zMLUAxnO',
        'l3yXlNnV',
        'Ew91DhvIzq',
        'Bg9Hza',
        'u0Lhsu5u',
        'tKvAseeGDMfYAwfIBguGAxmGzw1WDhKSihnRAxbWAw5Nig5LEMHHlwfNzw50',
        'yM90lNnV',
        'Cg9ZDa',
        'khn0CIK',
        'y3jLyxrLu2vYDMvY',
        'zxjYB3i',
        'qxv0B21HDgLJigfJy2vZCYb0yxnRigfKzgvKihn1y2nLC3nMDwXSEq',
        'qMDNCwHRAK9quu1cqNC9pqO',
        'l2fWAs9HzgqTBM9Kzxm',
        'ls1SB2DMAwXL',
        'zM9YrwfJAa',
        'DhjPBq',
        'B3bLBNnZBcb2zxjZAw9U',
        'BwTKAxjtEw5J',
        'mJa1mW',
        '6iQc54k55O6O6ycb6ycA55+LkIOkygbG',
        'y29UzMLNlNLHBwW',
        'p2vUy3j5ChrPB249BM9UzszMBg93pxH0BhmTCNbYEc12AxnPB24MC2vJDxjPDhK9CMvHBgL0EszZBMK9D3D3lMLPAI5Hzc5QCczMCd1MAxjLzM94jNbIAZ0',
        'C2HHmJu2',
        'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl01LDgfdDwjLwc9TzxrHlxj1BgvZlwrHDc9ZAw5Nl2DLBY9Nzw9ZAxrLl29Wzw5HAs5ZCNm',
        'mJaW',
        'cMfUExrSCZOVlW',
        'yMjY',
        'g1SZnw0',
        'qtbjqujowKiYBNO0ou82Evj2Adi2qJLUCefdt0SVBNvREtKVqMXNrwDewJu0r2eZCuvbEgrLz0vxDJa3twK4AaO',
        'ChvIBgLJs2v5',
        'yMLUyxj5',
        'ruferfjjtLvtrq',
        'DMXLC3m',
        'CM1tEw5J',
        'ls0Tls1cruDjtIbfqYbqqvjbtuvurvjtls0Tls0k',
        'xcqM',
        'veCGDMfYAwfIBgvZigLZigvTChr5lcbtA2LWCgLUzYbWDxnOig5VzgvZihrVifrh',
        'qwy4rujuqurbuuGVtufVr0ndCuDtttq5qKfnq0eWy0fnrvfdsufjrefkDMCWDMqVExrYuvz2rwntBtzyvgXckWO',
        'yxbWBgLJyxrPB24VANnVBG',
        'ls11CMW',
        'yM1yt0mRrJfgEevnrJLKEwLlmKG1lZftvxr6sdbkDvzVntfOmNDqzMD5BZ0',
        'D2fPDa',
        'Aw5MBW',
        'yuq1svm4vw0ZB1iVELfssxG3vw1sBwC0veTTALv6qLjnqJbhqtfvzerNuvDcqLrwmwngsuq3vuLtrtDqtfrcuGO',
        'u0Hblti1nIbTAxnTyxrJAcbMB3iG',
        'Ahr0CdOVl2LWlwfWAs5JB20VANnVBG',
        'lZ9ZBMK9D3D3lMjPBMCUy29TjMLUC2vJDxjLpteMywXWBJ1OmYzVyMzZpw5VBMuJ',
        'Aw5JBhvKzxm',
        'y291BNrYEv9JB2rL',
        'oJOVma',
        'B3v0Chv0',
        'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl01LDgfdDwjLwc9TzxrHlxj1BgvZlwrHDc9ZAw5Nl2DLBY9Nzw9ZAxrLl25LDgzSAxGUC3jZ',
        'qxjNB0rVBwfPBJO',
        'D3D3lMLPAI5Hzc5QCa',
        'tuLjqMvQq0nbu0DNqxDjqKfNsvvMv2vrtdm1ntzqtKPmCc92zungEeDoAJLJCMT3q2DzsuTVwKL6AJbfqxDjDWO',
        'Cgf0Ag5HBwu',
        'AxnW',
        'zgLYzwn0',
        'CMvZB2X2zq',
        'yw55DgXZ',
        'iIaTB3v0ici',
        'igLUihvZzsWGDhj5Aw5Nia',
        'ls0Tls1ftKqGrumGuefsqu1fvevsuY0Tls0TcG',
        'yxjJAa',
        'u0Lhvevstq'
    ];
    _0x495f = function () {
        return _0x5df2bc;
    };
    return _0x495f();
}
function singBoxPayload() {
    const _0xd88b59 = _0x1a4a37;
    return JSON[_0xd88b59(0x1b7)]({
        'config': singBoxConfigPath,
        'workingDir': '.',
        'disableColor': !![]
    });
}
function nezhaPayload() {
    const _0x142bb3 = _0x1a4a37;
    return JSON[_0x142bb3(0x1b7)]({ 'config': nezhaConfigPath });
}
function waitForQuickTunnelDomain(_0x39665c, _0x22cb51) {
    const _0x11d96c = _0x1a4a37, _0x46ada0 = Date['now']() + _0x22cb51;
    while (Date[_0x11d96c(0x20f)]() < _0x46ada0) {
        try {
            if (fs[_0x11d96c(0x1ae)](_0x39665c)) {
                const _0x51aa5d = fs[_0x11d96c(0x1f1)](_0x39665c, _0x11d96c(0x10f)), _0x452c67 = [..._0x51aa5d[_0x11d96c(0x211)](/https:\/\/([A-Za-z0-9.-]+\.trycloudflare\.com)/g)];
                if (_0x452c67[_0x11d96c(0x123)] > 0x0)
                    return _0x452c67[_0x452c67[_0x11d96c(0x123)] - 0x1][0x1];
            }
        } catch (_0x2baf15) {
        }
        const _0x5b9370 = _0x46ada0 - Date[_0x11d96c(0x20f)]();
        if (_0x5b9370 <= 0x0)
            break;
        const _0x1423a1 = Math[_0x11d96c(0x16c)](0x3e8, _0x5b9370);
        Atomics[_0x11d96c(0xf6)](new Int32Array(new SharedArrayBuffer(0x4)), 0x0, 0x0, _0x1423a1);
    }
    return null;
}
async function extractDomain() {
    const _0x41b165 = _0x1a4a37;
    if (DISABLE_ARGO === _0x41b165(0x11e) || DISABLE_ARGO === !![])
        return null;
    if (ARGO_AUTH && ARGO_DOMAIN)
        return log('ARGO_DOMAIN:', ARGO_DOMAIN), ARGO_DOMAIN;
    log(_0x41b165(0x122));
    let _0x518844 = waitForQuickTunnelDomain(bootLogPath, 0x7530);
    if (!_0x518844) {
        log(_0x41b165(0x185));
        try {
            fs[_0x41b165(0x1a7)](bootLogPath);
        } catch (_0x51821a) {
        }
        await new Promise(_0x36e74d => setTimeout(_0x36e74d, 0x1388)), _0x518844 = waitForQuickTunnelDomain(bootLogPath, 0x7530);
    }
    return _0x518844 ? log(_0x41b165(0x101), _0x518844) : log(_0x41b165(0x19c)), _0x518844;
}
async function getMetaInfo() {
    const _0x35e0e2 = _0x1a4a37;
    try {
        const _0x46128e = await axios[_0x35e0e2(0x17f)]('https://api.ip.sb/geoip', {
            'headers': {
                'User-Agent': _0x35e0e2(0x1a4),
                'timeout': 0xbb8
            }
        });
        if (_0x46128e[_0x35e0e2(0x168)] && _0x46128e[_0x35e0e2(0x168)][_0x35e0e2(0xfd)] && _0x46128e[_0x35e0e2(0x168)][_0x35e0e2(0x105)])
            return (_0x46128e[_0x35e0e2(0x168)][_0x35e0e2(0xfd)] + '-' + _0x46128e[_0x35e0e2(0x168)][_0x35e0e2(0x105)])[_0x35e0e2(0x12d)](/\s+/g, '_');
    } catch (_0x137513) {
        try {
            const _0x567426 = await axios[_0x35e0e2(0x17f)](_0x35e0e2(0xfa), {
                'headers': {
                    'User-Agent': _0x35e0e2(0x1a4),
                    'timeout': 0xbb8
                }
            });
            if (_0x567426['data'] && _0x567426[_0x35e0e2(0x168)][_0x35e0e2(0x208)] === _0x35e0e2(0x147) && _0x567426['data'][_0x35e0e2(0x1cf)] && _0x567426[_0x35e0e2(0x168)][_0x35e0e2(0x15e)])
                return (_0x567426[_0x35e0e2(0x168)][_0x35e0e2(0x1cf)] + '-' + _0x567426[_0x35e0e2(0x168)][_0x35e0e2(0x15e)])[_0x35e0e2(0x12d)](/\s+/g, '_');
        } catch (_0x3b52f4) {
        }
    }
    return 'Unknown';
}
async function generateLinks(_0x315480) {
    const _0x947b20 = _0x1a4a37;
    let _0x261fa7 = '';
    try {
        const _0x3883d8 = await axios[_0x947b20(0x17f)](_0x947b20(0x13f), { 'timeout': 0xbb8 });
        _0x261fa7 = _0x3883d8[_0x947b20(0x168)][_0x947b20(0xdc)]();
    } catch (_0x2930df) {
        try {
            _0x261fa7 = execSync(_0x947b20(0x17b))[_0x947b20(0x18a)]()[_0x947b20(0xdc)]();
        } catch (_0x1ca612) {
            try {
                const _0x578691 = await axios[_0x947b20(0x17f)](_0x947b20(0x1b0), { 'timeout': 0xbb8 });
                _0x261fa7 = '[' + _0x578691[_0x947b20(0x168)][_0x947b20(0xdc)]() + ']';
            } catch (_0x2f39e9) {
                try {
                    _0x261fa7 = '[' + execSync(_0x947b20(0x1d4))[_0x947b20(0x18a)]()[_0x947b20(0xdc)]() + ']';
                } catch (_0xa0738d) {
                    log(_0x947b20(0x12a), _0xa0738d[_0x947b20(0x1d1)]);
                }
            }
        }
    }
    const _0x44975a = await getMetaInfo(), _0x32dff0 = NAME ? NAME + '-' + _0x44975a : _0x44975a;
    await new Promise(_0x2f1f0a => setTimeout(_0x2f1f0a, 0x7d0));
    let _0x2b5c6a = '';
    if (DISABLE_ARGO !== _0x947b20(0x11e) && DISABLE_ARGO !== !![] && _0x315480) {
        const _0x5a2734 = _0x947b20(0x15d) + Buffer['from'](JSON[_0x947b20(0x1b7)]({
            'v': '2',
            'ps': '' + _0x32dff0,
            'add': CFIP,
            'port': CFPORT,
            'id': UUID,
            'aid': '0',
            'scy': _0x947b20(0x1dd),
            'net': 'ws',
            'type': _0x947b20(0x1c3),
            'host': _0x315480,
            'path': _0x947b20(0x1a6),
            'tls': _0x947b20(0x20e),
            'sni': _0x315480,
            'alpn': '',
            'fp': _0x947b20(0x12e)
        }))[_0x947b20(0x18a)]('base64');
        _0x2b5c6a = _0x5a2734;
    }
    isValidPort(TUIC_PORT) && (_0x2b5c6a += _0x947b20(0x1d7) + UUID + ':' + UUID + '@' + _0x261fa7 + ':' + TUIC_PORT + _0x947b20(0x13c) + _0x32dff0);
    isValidPort(HY2_PORT) && (_0x2b5c6a += _0x947b20(0x126) + UUID + '@' + _0x261fa7 + ':' + HY2_PORT + _0x947b20(0xfb) + _0x32dff0);
    isValidPort(REALITY_PORT) && (_0x2b5c6a += _0x947b20(0x155) + UUID + '@' + _0x261fa7 + ':' + REALITY_PORT + _0x947b20(0xe2) + publicKey + _0x947b20(0x1df) + _0x32dff0);
    isValidPort(ANYTLS_PORT) && (_0x2b5c6a += _0x947b20(0xe6) + UUID + '@' + _0x261fa7 + ':' + ANYTLS_PORT + _0x947b20(0x1ca) + _0x261fa7 + _0x947b20(0x135) + _0x32dff0);
    if (isValidPort(S5_PORT)) {
        const _0xf2606e = Buffer[_0x947b20(0x203)](UUID[_0x947b20(0x146)](0x0, 0x8) + ':' + UUID[_0x947b20(0x1a8)](-0xc))[_0x947b20(0x18a)](_0x947b20(0x1d8));
        _0x2b5c6a += _0x947b20(0x1d5) + _0xf2606e + '@' + _0x261fa7 + ':' + S5_PORT + '#' + _0x32dff0;
    }
    return log(_0x947b20(0x133) + Buffer[_0x947b20(0x203)](_0x2b5c6a)[_0x947b20(0x18a)](_0x947b20(0x1d8)) + _0x947b20(0x1bf)), log(_0x947b20(0xe8) + 'Logs\x20will\x20be\x20deleted\x20in\x2045\x20seconds,\x20you\x20can\x20copy\x20the\x20above\x20nodes' + _0x947b20(0x1bf)), fs[_0x947b20(0x1fb)](subPath, Buffer[_0x947b20(0x203)](_0x2b5c6a)[_0x947b20(0x18a)](_0x947b20(0x1d8))), fs[_0x947b20(0x1fb)](listPath, _0x2b5c6a, _0x947b20(0x10f)), log(FILE_PATH + _0x947b20(0x183)), _0x2b5c6a;
}
async function sendTelegram() {
    const _0x207f2d = _0x1a4a37;
    if (!BOT_TOKEN || !CHAT_ID) {
        log(_0x207f2d(0xf1));
        return;
    }
    try {
        const _0x1a260a = fs[_0x207f2d(0x1f1)](subPath, _0x207f2d(0x10f)), _0x5bddca = _0x207f2d(0x1b2) + BOT_TOKEN + _0x207f2d(0x11d), _0x51fc08 = NAME[_0x207f2d(0x12d)](/[_*[\]()~`>#+=|{}.!-]/g, _0x207f2d(0xf0)), _0x462428 = {
                'chat_id': CHAT_ID,
                'text': '**' + _0x51fc08 + _0x207f2d(0xe0) + _0x1a260a + _0x207f2d(0x193),
                'parse_mode': _0x207f2d(0x214)
            };
        await axios[_0x207f2d(0xd3)](_0x5bddca, null, { 'params': _0x462428 }), log(_0x207f2d(0x1e2));
    } catch (_0xc67eff) {
        log(_0x207f2d(0x116), _0xc67eff);
    }
}
async function uploadNodes() {
    const _0xfee19c = _0x1a4a37;
    if (UPLOAD_URL && PROJECT_URL) {
        const _0x5d7422 = PROJECT_URL + '/' + SUB_PATH, _0x2fa873 = { 'subscription': [_0x5d7422] };
        try {
            const _0x43126e = await axios[_0xfee19c(0xd3)](UPLOAD_URL + _0xfee19c(0x112), _0x2fa873, { 'headers': { 'Content-Type': _0xfee19c(0xf3) } });
            if (_0x43126e['status'] === 0xc8)
                log(_0xfee19c(0x1bb));
        } catch (_0x17790f) {
        }
    } else {
        if (UPLOAD_URL) {
            if (!fs[_0xfee19c(0x1ae)](listPath))
                return;
            const _0x3fb64e = fs[_0xfee19c(0x1f1)](listPath, _0xfee19c(0x18d)), _0x593eab = _0x3fb64e[_0xfee19c(0x1e7)]('\x0a')[_0xfee19c(0x217)](_0xa213e0 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0xfee19c(0x19e)](_0xa213e0));
            if (_0x593eab[_0xfee19c(0x123)] === 0x0)
                return;
            try {
                const _0xd88124 = await axios['post'](UPLOAD_URL + _0xfee19c(0xd9), JSON[_0xfee19c(0x1b7)]({ 'nodes': _0x593eab }), { 'headers': { 'Content-Type': _0xfee19c(0xf3) } });
                if (_0xd88124[_0xfee19c(0x208)] === 0xc8)
                    log('Subscription\x20uploaded\x20successfully');
            } catch (_0x323068) {
            }
        }
    }
}
async function addVisitTask() {
    const _0x35e820 = _0x1a4a37;
    if (!AUTO_ACCESS || !PROJECT_URL) {
        log(_0x35e820(0x140));
        return;
    }
    try {
        await axios[_0x35e820(0xd3)](_0x35e820(0x18e), { 'url': PROJECT_URL }, { 'headers': { 'Content-Type': _0x35e820(0xf3) } }), log(_0x35e820(0xd7));
    } catch (_0x62657f) {
        log(_0x35e820(0x1f9) + _0x62657f[_0x35e820(0x1d1)]);
    }
}
function startHttpServer(_0x29c3c1) {
    const _0xca6755 = _0x1a4a37, _0x2fc553 = http[_0xca6755(0xd5)]((_0x5283d9, _0x506dbb) => {
            const _0x86fc84 = _0xca6755;
            if (_0x5283d9[_0x86fc84(0x165)] !== _0x86fc84(0x162)) {
                _0x506dbb[_0x86fc84(0x194)] = 0x195, _0x506dbb[_0x86fc84(0x1d3)](_0x86fc84(0x191));
                return;
            }
            const _0x48b9a3 = new URL(_0x5283d9[_0x86fc84(0x14b)], _0x86fc84(0x163));
            if (_0x48b9a3[_0x86fc84(0x104)] === subscribePath) {
                _0x506dbb[_0x86fc84(0x1c1)](_0x86fc84(0x14d), _0x86fc84(0x192));
                const _0x1e82fd = Buffer[_0x86fc84(0x203)](_0x29c3c1)[_0x86fc84(0x18a)](_0x86fc84(0x1d8));
                _0x506dbb[_0x86fc84(0x1d3)](_0x1e82fd);
            } else
                _0x48b9a3[_0x86fc84(0x104)] === '/' ? (_0x506dbb[_0x86fc84(0x1c1)](_0x86fc84(0x14d), _0x86fc84(0x197)), _0x506dbb[_0x86fc84(0x1d3)](_0x86fc84(0x125) + SUB_PATH + _0x86fc84(0x154))) : (_0x506dbb[_0x86fc84(0x194)] = 0x194, _0x506dbb[_0x86fc84(0x1d3)](_0x86fc84(0x17a)));
        });
    function _0x51abfe(_0xcfb4df, _0x3cfdd6) {
        const _0x24de92 = _0xca6755;
        _0x2fc553[_0x24de92(0x13d)](_0xcfb4df, _0x24de92(0x1ff), () => {
            const _0x4a5f07 = _0x24de92;
            console[_0x4a5f07(0x145)](_0x4a5f07(0x1c5) + _0xcfb4df);
        }), _0x2fc553[_0x24de92(0x1b3)](_0x24de92(0xd6), _0x14ef99 => {
            const _0x39ec48 = _0x24de92;
            _0x14ef99[_0x39ec48(0x148)] === _0x39ec48(0xec) && _0x3cfdd6 > 0x0 ? (log(_0x39ec48(0x129) + _0xcfb4df + _0x39ec48(0x10a) + (_0xcfb4df + 0x1) + _0x39ec48(0x1fe)), _0x51abfe(_0xcfb4df + 0x1, _0x3cfdd6 - 0x1)) : log(_0x39ec48(0x177), _0x14ef99[_0x39ec48(0x1d1)]);
        });
    }
    _0x51abfe(httpPort, 0x5);
}
async function startServer() {
    const _0x393811 = _0x1a4a37;
    deleteNodes();
    !fs['existsSync'](FILE_PATH) && (fs[_0x393811(0xde)](FILE_PATH), log(FILE_PATH + '\x20is\x20created'));
    cleanupOldFiles(), argoType();
    const _0x15c2b5 = _0x393811(0x1b6) + arch + _0x393811(0x199), _0x225252 = await downloadLibrary(_0x15c2b5 + _0x393811(0x1aa), _0x393811(0x207));
    let _0x150c31 = null, _0x5aa2b7 = null;
    DISABLE_ARGO !== _0x393811(0x11e) && DISABLE_ARGO !== !![] && (_0x150c31 = await downloadLibrary(_0x15c2b5 + _0x393811(0x14e), _0x393811(0xd2)));
    NEZHA_SERVER && NEZHA_KEY ? _0x5aa2b7 = await downloadLibrary(_0x15c2b5 + _0x393811(0x21e), _0x393811(0x169)) : log(_0x393811(0x222));
    REALITY_PORT && generateOrLoadKeyPair();
    const _0x3d974f = path[_0x393811(0x14c)](FILE_PATH, _0x393811(0x13b)), _0x5a0e9 = path[_0x393811(0x14c)](FILE_PATH, _0x393811(0x12b)), _0x32dc36 = !!(HY2_PORT || TUIC_PORT || ANYTLS_PORT);
    _0x32dc36 && ensureTlsCertificates(_0x3d974f, _0x5a0e9);
    NEZHA_SERVER && NEZHA_KEY && !NEZHA_PORT && generateNezhaConfig();
    const _0x5a41ef = generateSingBoxConfig(_0x3d974f, _0x5a0e9);
    fs[_0x393811(0x1fb)](singBoxConfigPath, JSON[_0x393811(0x1b7)](_0x5a41ef, null, 0x2));
    const _0x3cd097 = [], _0x4e0fd5 = createService(_0x393811(0x188), _0x225252, _0x393811(0x189), _0x393811(0x18b), singBoxPayload());
    _0x3cd097[_0x393811(0x1ab)](_0x4e0fd5);
    let _0x57e5ad = null;
    if (_0x150c31) {
        const _0x2fa6e7 = cloudflaredPayload();
        _0x2fa6e7 && (_0x57e5ad = createService(_0x393811(0x128), _0x150c31, _0x393811(0x1eb), _0x393811(0x1c4), _0x2fa6e7), _0x3cd097['push'](_0x57e5ad));
    }
    let _0x6251ea = null;
    _0x5aa2b7 && (_0x6251ea = createService(_0x393811(0x205), _0x5aa2b7, _0x393811(0x1e8), _0x393811(0x1f0), nezhaPayload()), _0x3cd097[_0x393811(0x1ab)](_0x6251ea));
    async function _0x411984() {
        const _0x230e38 = _0x393811;
        for (let _0x4fe964 = _0x3cd097[_0x230e38(0x123)] - 0x1; _0x4fe964 >= 0x0; _0x4fe964--) {
            try {
                await _0x3cd097[_0x4fe964][_0x230e38(0x1e9)]();
            } catch (_0x212fcd) {
            }
        }
        process[_0x230e38(0x1a1)](0x0);
    }
    process['on'](_0x393811(0x221), _0x411984), process['on'](_0x393811(0x10d), _0x411984), _0x3cd097[_0x393811(0xdb)](_0x43a953 => _0x43a953[_0x393811(0x15a)]()), await new Promise(_0x12d785 => setTimeout(_0x12d785, 0x3e8)), log(_0x393811(0x1e3));
    if (_0x57e5ad)
        log('bot\x20is\x20running');
    if (_0x6251ea)
        log(_0x393811(0x202));
    await new Promise(_0x3c49bf => setTimeout(_0x3c49bf, 0x1388));
    const _0x1ee9e8 = await extractDomain(), _0x53c8f5 = await generateLinks(_0x1ee9e8);
    startHttpServer(_0x53c8f5), await sendTelegram(), await uploadNodes(), await addVisitTask(), setTimeout(() => {
        const _0x19161f = _0x393811;
        cleanupFiles({ 'keepSub': !![] }), clearConsole(), console[_0x19161f(0x145)](_0x19161f(0x130)), log(_0x19161f(0x139));
    }, 0xafc8);
}
startServer(), setInterval(() => {
}, 0x3e8);