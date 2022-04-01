import { __extends as t, __spreadArray as e, __awaiter as n, __generator as r } from "tslib";

import { SDK_VERSION as i, _registerComponent as o, registerVersion as s, _getProvider, getApp as a, _removeServiceInstance as u } from "@firebase/app";

import { Component as c } from "@firebase/component";

import { Logger as h, LogLevel as f } from "@firebase/logger";

import { getUA as l, isSafari as d, isMobileCordova as p, isReactNative as y, isElectron as v, isIE as m, isUWP as g, isBrowserExtension as w, getModularInstance as b, createMockUserToken as I, deepEqual as T, isIndexedDBAvailable as E } from "@firebase/util";

import { XhrIo as S, EventType as _, ErrorCode as k, createWebChannelTransport as A, getStatEventTarget as D, FetchXmlHttpFactory as N, WebChannel as C, Event as x, Stat as R } from "@firebase/webchannel-wrapper";

var L = "@firebase/firestore", O = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.isAuthenticated = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.toKey = function() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
/** A user with a null UID. */ O.UNAUTHENTICATED = new O(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
O.GOOGLE_CREDENTIALS = new O("google-credentials-uid"), O.FIRST_PARTY = new O("first-party-uid"), 
O.MOCK_USER = new O("mock-user");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var P = "9.6.1", F = new h("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function M() {
    return F.logLevel;
}

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function V(t) {
    F.setLogLevel(t);
}

function q(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (F.logLevel <= f.DEBUG) {
        var i = n.map(j);
        F.debug.apply(F, e([ "Firestore (" + P + "): " + t ], i));
    }
}

function U(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (F.logLevel <= f.ERROR) {
        var i = n.map(j);
        F.error.apply(F, e([ "Firestore (" + P + "): " + t ], i));
    }
}

/**
 * @internal
 */ function B(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (F.logLevel <= f.WARN) {
        var i = n.map(j);
        F.warn.apply(F, e([ "Firestore (" + P + "): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function j(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function K(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (" + P + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw U(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function G(t, e) {
    t || K();
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * The code of callsites invoking this function are stripped out in production
 * builds. Any side-effects of code within the debugAssert() invocation will not
 * happen in this case.
 *
 * @internal
 */ function z(t, e) {
    t || K();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function Q(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var W = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, H = /** @class */ function(e) {
    /** @hideconstructor */
    function n(
    /**
     * The backend error code associated with this error.
     */
    t, 
    /**
     * A custom error description.
     */
    n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, 
        /** The custom name for all FirestoreErrors. */
        r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return t(n, e), n;
}(Error), Y = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, J = function(t, e) {
    this.user = e, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", "Bearer " + t);
}, X = /** @class */ function() {
    function t() {}
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.invalidateToken = function() {}, t.prototype.start = function(t, e) {
        // Fire with initial user.
        t.enqueueRetryable((function() {
            return e(O.UNAUTHENTICATED);
        }));
    }, t.prototype.shutdown = function() {}, t;
}(), Z = /** @class */ function() {
    function t(t) {
        this.token = t, 
        /**
             * Stores the listener registered with setChangeListener()
             * This isn't actually necessary since the UID never changes, but we use this
             * to verify the listen contract is adhered to in tests.
             */
        this.changeListener = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(this.token);
    }, t.prototype.invalidateToken = function() {}, t.prototype.start = function(t, e) {
        var n = this;
        this.changeListener = e, 
        // Fire with initial user.
        t.enqueueRetryable((function() {
            return e(n.token.user);
        }));
    }, t.prototype.shutdown = function() {
        this.changeListener = null;
    }, t;
}(), $ = /** @class */ function() {
    function t(t) {
        this.t = t, 
        /** Tracks the current User. */
        this.currentUser = O.UNAUTHENTICATED, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.i = 0, this.forceRefresh = !1, this.auth = null;
    }
    return t.prototype.start = function(t, e) {
        var i = this, o = this.i, s = function(t) {
            return i.i !== o ? (o = i.i, e(t)) : Promise.resolve();
        }, a = new Y;
        this.o = function() {
            i.i++, i.currentUser = i.u(), a.resolve(), a = new Y, t.enqueueRetryable((function() {
                return s(i.currentUser);
            }));
        };
        var u = function() {
            var e = a;
            t.enqueueRetryable((function() {
                return n(i, void 0, void 0, (function() {
                    return r(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return [ 4 /*yield*/ , e.promise ];

                          case 1:
                            return t.sent(), [ 4 /*yield*/ , s(this.currentUser) ];

                          case 2:
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        }, c = function(t) {
            q("FirebaseAuthCredentialsProvider", "Auth detected"), i.auth = t, i.auth.addAuthTokenListener(i.o), 
            u();
        };
        this.t.onInit((function(t) {
            return c(t);
        })), 
        // Our users can initialize Auth right after Firestore, so we give it
        // a chance to register itself with the component framework before we
        // determine whether to start up in unauthenticated mode.
        setTimeout((function() {
            if (!i.auth) {
                var t = i.t.getImmediate({
                    optional: !0
                });
                t ? c(t) : (
                // If auth is still not available, proceed with `null` user
                q("FirebaseAuthCredentialsProvider", "Auth not yet detected"), a.resolve(), a = new Y);
            }
        }), 0), u();
    }, t.prototype.getToken = function() {
        var t = this, e = this.i, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.i !== e ? (q("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (G("string" == typeof n.accessToken), new J(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.invalidateToken = function() {
        this.forceRefresh = !0;
    }, t.prototype.shutdown = function() {
        this.auth && this.auth.removeAuthTokenListener(this.o);
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.u = function() {
        var t = this.auth && this.auth.getUid();
        return G(null === t || "string" == typeof t), new O(t);
    }, t;
}(), tt = function(t, e, n) {
    this.type = "FirstParty", this.user = O.FIRST_PARTY, this.headers = new Map, this.headers.set("X-Goog-AuthUser", e);
    var r = t.auth.getAuthHeaderValueForFirstParty([]);
    r && this.headers.set("Authorization", r), n && this.headers.set("X-Goog-Iam-Authorization-Token", n);
}, et = /** @class */ function() {
    function t(t, e, n) {
        this.h = t, this.l = e, this.m = n;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new tt(this.h, this.l, this.m));
    }, t.prototype.start = function(t, e) {
        // Fire with initial uid.
        t.enqueueRetryable((function() {
            return e(O.FIRST_PARTY);
        }));
    }, t.prototype.shutdown = function() {}, t.prototype.invalidateToken = function() {}, 
    t;
}(), nt = function(t) {
    this.value = t, this.type = "AppCheck", this.headers = new Map, t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
}, rt = /** @class */ function() {
    function t(t) {
        this.g = t, this.forceRefresh = !1, this.appCheck = null;
    }
    return t.prototype.start = function(t, e) {
        var n = this;
        this.o = function(n) {
            t.enqueueRetryable((function() {
                return function(t) {
                    return null != t.error && q("FirebaseAppCheckTokenProvider", "Error getting App Check token; using placeholder token instead. Error: " + t.error.message), 
                    e(t.token);
                }(n);
            }));
        };
        var r = function(t) {
            q("FirebaseAppCheckTokenProvider", "AppCheck detected"), n.appCheck = t, n.appCheck.addTokenListener(n.o);
        };
        this.g.onInit((function(t) {
            return r(t);
        })), 
        // Our users can initialize AppCheck after Firestore, so we give it
        // a chance to register itself with the component framework.
        setTimeout((function() {
            if (!n.appCheck) {
                var t = n.g.getImmediate({
                    optional: !0
                });
                t ? r(t) : 
                // If AppCheck is still not available, proceed without it.
                q("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
            }
        }), 0);
    }, t.prototype.getToken = function() {
        var t = this.forceRefresh;
        return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(t).then((function(t) {
            return t ? (G("string" == typeof t.token), new nt(t.token)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.invalidateToken = function() {
        this.forceRefresh = !0;
    }, t.prototype.shutdown = function() {
        this.appCheck && this.appCheck.removeTokenListener(this.o);
    }, t;
}(), it = /** @class */ function() {
    function t() {}
    return t.prototype.getToken = function() {
        return Promise.resolve(new nt(""));
    }, t.prototype.invalidateToken = function() {}, t.prototype.start = function(t, e) {}, 
    t.prototype.shutdown = function() {}, t;
}(), ot = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.sequenceNumberHandler = function(t) {
            return n.p(t);
        }, this.T = function(t) {
            return e.writeSequenceNumber(t);
        });
    }
    return t.prototype.p = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.T && this.T(t), t;
    }, t;
}();

/** An error returned by a Firestore operation. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */
function st(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ot.I = -1;

var at = /** @class */ function() {
    function t() {}
    return t.A = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = st(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function ut(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function ct(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function ht(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ var ft = /** @class */ function() {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    function t(
    /**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */
    t, 
    /**
     * The fractions of a second at nanosecond resolution.*
     */
    e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new H(W.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new H(W.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new H(W.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new H(W.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    return t.now = function() {
        return t.fromMillis(Date.now());
    }, 
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, 
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, Math.floor(1e6 * (e - 1e3 * n)));
    }, 
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, 
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype._compareTo = function(t) {
        return this.seconds === t.seconds ? ut(this.nanoseconds, t.nanoseconds) : ut(this.seconds, t.seconds);
    }, 
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, 
    /** Returns a textual representation of this `Timestamp`. */ t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, 
    /** Returns a JSON-serializable representation of this `Timestamp`. */ t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, 
    /**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */
    t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where
        // <seconds> is translated to have a non-negative value and both <seconds>
        // and <nanoseconds> are left-padded with zeroes to be a consistent length.
        // Strings with this format then have a lexiographical ordering that matches
        // the expected ordering. The <seconds> translation is done to avoid having
        // a leading negative sign (i.e. a leading '-' character) in its string
        // representation, which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid
        // 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), lt = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.fromTimestamp = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new ft(0, 0));
    }, t.prototype.compareTo = function(t) {
        return this.timestamp._compareTo(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.toMicroseconds = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.toTimestamp = function() {
        return this.timestamp;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dt(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function pt(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function yt(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Path represents an ordered sequence of string segments.
 */ var vt = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && K(), void 0 === n ? n = t.length - e : n > t.length - e && K(), 
        this.segments = t, this.offset = e, this.len = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.len;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.comparator(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.construct(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.popFirst = function(t) {
        return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
    }, t.prototype.popLast = function() {
        return this.construct(this.segments, this.offset, this.length - 1);
    }, t.prototype.firstSegment = function() {
        return this.segments[this.offset];
    }, t.prototype.lastSegment = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.isEmpty = function() {
        return 0 === this.length;
    }, t.prototype.isPrefixOf = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.isImmediateParentOf = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.toArray = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.comparator = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), mt = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.construct = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.canonicalString = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join("/");
    }, n.prototype.toString = function() {
        return this.canonicalString();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    n.fromString = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
                for (var r = [], i = 0, o = t; i < o.length; i++) {
            var s = o[i];
            if (s.indexOf("//") >= 0) throw new H(W.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
            // Strip leading and traling slashed.
                        r.push.apply(r, s.split("/").filter((function(t) {
                return t.length > 0;
            })));
        }
        return new n(r);
    }, n.emptyPath = function() {
        return new n([]);
    }, n;
}(vt), gt = /^[_a-zA-Z][_a-zA-Z0-9]*$/, wt = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype.construct = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.isValidIdentifier = function(t) {
        return gt.test(t);
    }, n.prototype.canonicalString = function() {
        return this.toArray().map((function(t) {
            return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), n.isValidIdentifier(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.canonicalString();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.isKeyField = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.keyField = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.fromServerFormat = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new H(W.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var a = t[i];
            if ("\\" === a) {
                if (i + 1 === t.length) throw new H(W.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var u = t[i + 1];
                if ("\\" !== u && "." !== u && "`" !== u) throw new H(W.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += u, i += 2;
            } else "`" === a ? (s = !s, i++) : "." !== a || s ? (r += a, i++) : (o(), i++);
        }
        if (o(), s) throw new H(W.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n.emptyPath = function() {
        return new n([]);
    }, n;
}(vt), bt = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(wt.comparator)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.covers = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].isPrefixOf(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return ct(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}();

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/** True if and only if the Base64 conversion functions are available. */
function It() {
    return "undefined" != typeof atob;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ var Tt = /** @class */ function() {
    function t(t) {
        this.binaryString = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        var n = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e);
        return new t(n);
    }, t.prototype.toBase64 = function() {
        return t = this.binaryString, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
    }, t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.binaryString);
    }, t.prototype.approximateByteSize = function() {
        return 2 * this.binaryString.length;
    }, t.prototype.compareTo = function(t) {
        return ut(this.binaryString, t.binaryString);
    }, t.prototype.isEqual = function(t) {
        return this.binaryString === t.binaryString;
    }, t;
}();

Tt.EMPTY_BYTE_STRING = new Tt("");

var Et = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ function St(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (G(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = Et.exec(t);
        if (G(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: _t(t.seconds),
        nanos: _t(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function _t(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function kt(t) {
    return "string" == typeof t ? Tt.fromBase64String(t) : Tt.fromUint8Array(t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function At(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function Dt(t) {
    var e = t.mapValue.fields.__previous_value__;
    return At(e) ? Dt(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function Nt(t) {
    var e = St(t.mapValue.fields.__local_write_time__.timestampValue);
    return new ft(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Sentinel value that sorts before any Mutation Batch ID. */
/**
 * Returns whether a variable is either undefined or null.
 */ function Ct(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function xt(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */ function Rt(t) {
    return "number" == typeof t && Number.isInteger(t) && !xt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */ var Lt = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.fromPath = function(e) {
        return new t(mt.fromString(e));
    }, t.fromName = function(e) {
        return new t(mt.fromString(e).popFirst(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.hasCollectionId = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === mt.comparator(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.comparator = function(t, e) {
        return mt.comparator(t.path, e.path);
    }, t.isDocumentKey = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */
    t.fromSegments = function(e) {
        return new t(new mt(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Extracts the backend's type order for the provided value. */ function Ot(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? At(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : K();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Pt(t, e) {
    var n = Ot(t);
    if (n !== Ot(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Nt(t).isEqual(Nt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = St(t.timestampValue), r = St(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return kt(t.bytesValue).isEqual(kt(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return _t(t.geoPointValue.latitude) === _t(e.geoPointValue.latitude) && _t(t.geoPointValue.longitude) === _t(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return _t(t.integerValue) === _t(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = _t(t.doubleValue), r = _t(e.doubleValue);
                return n === r ? xt(n) === xt(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return ct(t.arrayValue.values || [], e.arrayValue.values || [], Pt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (dt(n) !== dt(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Pt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return K();
    }
}

function Ft(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Pt(t, e);
    }));
}

function Mt(t, e) {
    var n = Ot(t), r = Ot(e);
    if (n !== r) return ut(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return ut(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = _t(t.integerValue || t.doubleValue), r = _t(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Vt(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Vt(Nt(t), Nt(e));

      case 5 /* StringValue */ :
        return ut(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = kt(t), r = kt(e);
            return n.compareTo(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = ut(n[i], r[i]);
                if (0 !== o) return o;
            }
            return ut(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = ut(_t(t.latitude), _t(e.latitude));
            return 0 !== n ? n : ut(_t(t.longitude), _t(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = Mt(n[i], r[i]);
                if (o) return o;
            }
            return ut(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var a = ut(r[s], o[s]);
                if (0 !== a) return a;
                var u = Mt(n[r[s]], i[o[s]]);
                if (0 !== u) return u;
            }
            return ut(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw K();
    }
}

function Vt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return ut(t, e);
    var n = St(t), r = St(e), i = ut(n.seconds, r.seconds);
    return 0 !== i ? i : ut(n.nanos, r.nanos);
}

function qt(t) {
    return Ut(t);
}

function Ut(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        var e = St(t);
        return "time(" + e.seconds + "," + e.nanos + ")";
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? kt(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    Lt.fromName(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t) {
        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
            n ? n = !1 : e += ",", e += Ut(i[r]);
        }
        return e + "]";
    }(t.arrayValue) : "mapValue" in t ? function(t) {
        for (
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
            var o = i[r];
            n ? n = !1 : e += ",", e += o + ":" + Ut(t.fields[o]);
        }
        return e + "}";
    }(t.mapValue) : K();
    var e, n;
}

function Bt(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.canonicalString()
    };
}

/** Returns true if `value` is an IntegerValue . */ function jt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function Kt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function Gt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function zt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Qt(t) {
    return !!t && "mapValue" in t;
}

/** Creates a deep copy of `source`. */ function Wt(t) {
    if (t.geoPointValue) return {
        geoPointValue: Object.assign({}, t.geoPointValue)
    };
    if (t.timestampValue && "object" == typeof t.timestampValue) return {
        timestampValue: Object.assign({}, t.timestampValue)
    };
    if (t.mapValue) {
        var e = {
            mapValue: {
                fields: {}
            }
        };
        return pt(t.mapValue.fields, (function(t, n) {
            return e.mapValue.fields[t] = Wt(n);
        })), e;
    }
    if (t.arrayValue) {
        for (var n = {
            arrayValue: {
                values: []
            }
        }, r = 0; r < (t.arrayValue.values || []).length; ++r) n.arrayValue.values[r] = Wt(t.arrayValue.values[r]);
        return n;
    }
    return Object.assign({}, t);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ var Ht = /** @class */ function() {
    function t(t) {
        this.value = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */
    t.prototype.field = function(t) {
        if (t.isEmpty()) return this.value;
        for (var e = this.value, n = 0; n < t.length - 1; ++n) if (!Qt(e = (e.mapValue.fields || {})[t.get(n)])) return null;
        return (e = (e.mapValue.fields || {})[t.lastSegment()]) || null;
    }, 
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */
    t.prototype.set = function(t, e) {
        this.getFieldsMap(t.popLast())[t.lastSegment()] = Wt(e);
    }, 
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */
    t.prototype.setAll = function(t) {
        var e = this, n = wt.emptyPath(), r = {}, i = [];
        t.forEach((function(t, o) {
            if (!n.isImmediateParentOf(o)) {
                // Insert the accumulated changes at this parent location
                var s = e.getFieldsMap(n);
                e.applyChanges(s, r, i), r = {}, i = [], n = o.popLast();
            }
            t ? r[o.lastSegment()] = Wt(t) : i.push(o.lastSegment());
        }));
        var o = this.getFieldsMap(n);
        this.applyChanges(o, r, i);
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */
    t.prototype.delete = function(t) {
        var e = this.field(t.popLast());
        Qt(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
    }, t.prototype.isEqual = function(t) {
        return Pt(this.value, t.value);
    }, 
    /**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */
    t.prototype.getFieldsMap = function(t) {
        var e = this.value;
        e.mapValue.fields || (e.mapValue = {
            fields: {}
        });
        for (var n = 0; n < t.length; ++n) {
            var r = e.mapValue.fields[t.get(n)];
            Qt(r) && r.mapValue.fields || (r = {
                mapValue: {
                    fields: {}
                }
            }, e.mapValue.fields[t.get(n)] = r), e = r;
        }
        return e.mapValue.fields;
    }, 
    /**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */
    t.prototype.applyChanges = function(t, e, n) {
        pt(e, (function(e, n) {
            return t[e] = n;
        }));
        for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r];
            delete t[o];
        }
    }, t.prototype.clone = function() {
        return new t(Wt(this.value));
    }, t;
}();

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */ function Yt(t) {
    var e = [];
    return pt(t.fields, (function(t, n) {
        var r = new wt([ t ]);
        if (Qt(n)) {
            var i = Yt(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var a = s[o];
                e.push(r.child(a));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new bt(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */;
}

var Jt = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.key = t, this.documentType = e, this.version = n, this.data = r, this.documentState = i
        /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */;
    }
    return t.newInvalidDocument = function(e) {
        return new t(e, 0 /* INVALID */ , lt.min(), Ht.empty(), 0 /* SYNCED */);
    }, 
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */
    t.newFoundDocument = function(e, n, r) {
        return new t(e, 1 /* FOUND_DOCUMENT */ , n, r, 0 /* SYNCED */);
    }, 
    /** Creates a new document that is known to not exist at the given version. */ t.newNoDocument = function(e, n) {
        return new t(e, 2 /* NO_DOCUMENT */ , n, Ht.empty(), 0 /* SYNCED */);
    }, 
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */
    t.newUnknownDocument = function(e, n) {
        return new t(e, 3 /* UNKNOWN_DOCUMENT */ , n, Ht.empty(), 2 /* HAS_COMMITTED_MUTATIONS */);
    }, 
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */
    t.prototype.convertToFoundDocument = function(t, e) {
        return this.version = t, this.documentType = 1 /* FOUND_DOCUMENT */ , this.data = e, 
        this.documentState = 0 /* SYNCED */ , this;
    }, 
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */
    t.prototype.convertToNoDocument = function(t) {
        return this.version = t, this.documentType = 2 /* NO_DOCUMENT */ , this.data = Ht.empty(), 
        this.documentState = 0 /* SYNCED */ , this;
    }, 
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */
    t.prototype.convertToUnknownDocument = function(t) {
        return this.version = t, this.documentType = 3 /* UNKNOWN_DOCUMENT */ , this.data = Ht.empty(), 
        this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }, t.prototype.setHasCommittedMutations = function() {
        return this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }, t.prototype.setHasLocalMutations = function() {
        return this.documentState = 1 /* HAS_LOCAL_MUTATIONS */ , this;
    }, Object.defineProperty(t.prototype, "hasLocalMutations", {
        get: function() {
            return 1 /* HAS_LOCAL_MUTATIONS */ === this.documentState;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hasCommittedMutations", {
        get: function() {
            return 2 /* HAS_COMMITTED_MUTATIONS */ === this.documentState;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasLocalMutations || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isValidDocument = function() {
        return 0 /* INVALID */ !== this.documentType;
    }, t.prototype.isFoundDocument = function() {
        return 1 /* FOUND_DOCUMENT */ === this.documentType;
    }, t.prototype.isNoDocument = function() {
        return 2 /* NO_DOCUMENT */ === this.documentType;
    }, t.prototype.isUnknownDocument = function() {
        return 3 /* UNKNOWN_DOCUMENT */ === this.documentType;
    }, t.prototype.isEqual = function(e) {
        return e instanceof t && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
    }, t.prototype.clone = function() {
        return new t(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
    }, t.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + JSON.stringify(this.data.value) + ", {documentType: " + this.documentType + "}), {documentState: " + this.documentState + "})";
    }, t;
}(), Xt = function(t, e, n, r, i, o, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = s, this.R = null;
};

/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */
function Zt(t, e, n, r, i, o, s) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    new Xt(t, e, n, r, i, o, s);
}

function $t(t) {
    var e = Q(t);
    if (null === e.R) {
        var n = e.path.canonicalString();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.canonicalString() + t.op.toString() + qt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Make this collision robust.
                return t.field.canonicalString() + t.dir;
            }(t);
        })).join(","), Ct(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += le(e.startAt)), e.endAt && (n += "|ub:", n += le(e.endAt)), e.R = n;
    }
    return e.R;
}

function te(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!pe(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !Pt(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!ve(t.startAt, e.startAt) && ve(t.endAt, e.endAt);
}

function ee(t) {
    return Lt.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

var ne = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return t(n, e), n.create = function(t, e, r) {
        return t.isKeyField() ? "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.P(t, e, r) : new re(t, e, r) : "array-contains" /* ARRAY_CONTAINS */ === e ? new ae(t, r) : "in" /* IN */ === e ? new ue(t, r) : "not-in" /* NOT_IN */ === e ? new ce(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new he(t, r) : new n(t, e, r);
    }, n.P = function(t, e, n) {
        return "in" /* IN */ === e ? new ie(t, n) : new oe(t, n);
    }, n.prototype.matches = function(t) {
        var e = t.data.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.v(Mt(e, this.value)) : null !== e && Ot(this.value) === Ot(e) && this.v(Mt(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, n.prototype.v = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return K();
        }
    }, n.prototype.V = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }, n;
}((function() {}));

var re = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = Lt.fromName(r.referenceValue), 
        i;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = Lt.comparator(t.key, this.key);
        return this.v(e);
    }, n;
}(ne), ie = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = se("in" /* IN */ , n), 
        r;
    }
    return t(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(ne), oe = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "not-in" /* NOT_IN */ , n) || this).keys = se("not-in" /* NOT_IN */ , n), 
        r;
    }
    return t(n, e), n.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(ne);

/** Filter that matches on key fields within an array. */ function se(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return Lt.fromName(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var ae = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = t.data.field(this.field);
        return Kt(e) && Ft(e.arrayValue, this.value);
    }, n;
}(ne), ue = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = t.data.field(this.field);
        return null !== e && Ft(this.value.arrayValue, e);
    }, n;
}(ne), ce = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "not-in" /* NOT_IN */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        if (Ft(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        var e = t.data.field(this.field);
        return null !== e && !Ft(this.value.arrayValue, e);
    }, n;
}(ne), he = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return t(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.data.field(this.field);
        return !(!Kt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return Ft(e.value.arrayValue, t);
        }));
    }, n;
}(ne), fe = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function le(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return qt(t);
    })).join(",");
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var de = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function pe(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function ye(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], s = t.position[i];
        if (r = o.field.isKeyField() ? Lt.comparator(Lt.fromName(s.referenceValue), n.key) : Mt(s, n.data.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function ve(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!Pt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ var me = 
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function(t, e, n, r, i, o /* First */ , s, a) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
    void 0 === a && (a = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, 
    this.filters = r, this.limit = i, this.limitType = o, this.startAt = s, this.endAt = a, 
    this.S = null, 
    // The corresponding `Target` of this `Query` instance.
    this.D = null, this.startAt, this.endAt;
};

/** Creates a new Query instance with the options provided. */ function ge(t, e, n, r, i, o, s, a) {
    return new me(t, e, n, r, i, o, s, a);
}

/** Creates a new Query for a query that matches all documents at `path` */ function we(t) {
    return new me(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function be(t) {
    return !Ct(t.limit) && "F" /* First */ === t.limitType;
}

function Ie(t) {
    return !Ct(t.limit) && "L" /* Last */ === t.limitType;
}

function Te(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function Ee(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.V()) return r.field;
    }
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function Se(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function _e(t) {
    var e = Q(t);
    if (null === e.S) {
        e.S = [];
        var n = Ee(e), r = Te(e);
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.isKeyField() || e.S.push(new de(n)), e.S.push(new de(wt.keyField(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, s = e.explicitOrderBy; o < s.length; o++) {
                var a = s[o];
                e.S.push(a), a.field.isKeyField() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var u = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc" /* ASCENDING */;
                e.S.push(new de(wt.keyField(), u));
            }
        }
    }
    return e.S;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function ke(t) {
    var e = Q(t);
    if (!e.D) if ("F" /* First */ === e.limitType) e.D = Zt(e.path, e.collectionGroup, _e(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = _e(e); r < i.length; r++) {
            var o = i[r], s = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new de(o.field, s));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var a = e.endAt ? new fe(e.endAt.position, !e.endAt.before) : null, u = e.startAt ? new fe(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.D = Zt(e.path, e.collectionGroup, n, e.filters, e.limit, a, u);
    }
    return e.D;
}

function Ae(t, e, n) {
    return new me(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function De(t, e) {
    return te(ke(t), ke(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function Ne(t) {
    return $t(ke(t)) + "|lt:" + t.limitType;
}

function Ce(t) {
    return "Query(target=" + function(t) {
        var e = t.path.canonicalString();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.canonicalString() + " " + e.op + " " + qt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        Ct(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return function(t) {
                return t.field.canonicalString() + " (" + t.dir + ")";
            }(t);
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + le(t.startAt)), t.endAt && (e += ", endAt: " + le(t.endAt)), 
        "Target(" + e + ")";
    }(ke(t)) + "; limitType=" + t.limitType + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function xe(t, e) {
    return e.isFoundDocument() && function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n) : Lt.isDocumentKey(t.path) ? t.path.isEqual(n) : t.path.isImmediateParentOf(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.explicitOrderBy; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.isKeyField() && null === e.data.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !ye(t.startAt, _e(t), e)) && (!t.endAt || !ye(t.endAt, _e(t), e));
    }(t, e);
}

function Re(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = _e(t); i < o.length; i++) {
            var s = o[i], a = Le(s, e, n);
            if (0 !== a) return a;
            r = r || s.field.isKeyField();
        }
        return 0;
    };
}

function Le(t, e, n) {
    var r = t.field.isKeyField() ? Lt.comparator(e.key, n.key) : function(t, e, n) {
        var r = e.data.field(t), i = n.data.field(t);
        return null !== r && null !== i ? Mt(r, i) : K();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return K();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function Oe(t, e) {
    if (t.C) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: xt(e) ? "-0" : e
    };
}

/**
 * Returns an IntegerValue for `value`.
 */ function Pe(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function Fe(t, e) {
    return Rt(e) ? Pe(e) : Oe(t, e);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Used to represent a field transform on a mutation. */ var Me = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this._ = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function Ve(t, e, n) {
    return t instanceof Be ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof je ? Ke(t, e) : t instanceof Ge ? ze(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Ue(t, e), r = We(n) + We(t.N);
        return jt(n) && jt(t.N) ? Pe(r) : Oe(t.k, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function qe(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof je ? Ke(t, e) : t instanceof Ge ? ze(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function Ue(t, e) {
    return t instanceof Qe ? jt(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var Be = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n;
}(Me), je = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t(n, e), n;
}(Me);

/** Transforms an array value via a union operation. */ function Ke(t, e) {
    for (var n = He(e), r = function(t) {
        n.some((function(e) {
            return Pt(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var Ge = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t(n, e), n;
}(Me);

function ze(t, e) {
    for (var n = He(e), r = function(t) {
        n = n.filter((function(e) {
            return !Pt(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var Qe = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).k = t, r.N = n, r;
    }
    return t(n, e), n;
}(Me);

function We(t) {
    return _t(t.integerValue || t.doubleValue);
}

function He(t) {
    return Kt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ var Ye = function(t, e) {
    this.field = t, this.transform = e;
};

/** The result of successfully applying a mutation to the backend. */
var Je = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */
e) {
    this.version = t, this.transformResults = e;
}, Xe = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.none = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "isNone", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/** Returns true if the preconditions is valid for the given document. */ function Ze(t, e) {
    return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument();
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */ var $e = function() {};

/**
 * Applies this mutation to the given document for the purposes of computing a
 * new remote document. If the input document doesn't match the expected state
 * (e.g. it is invalid or outdated), the document type may transition to
 * unknown.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 */ function tn(t, e, n) {
    t instanceof sn ? function(t, e, n) {
        // Unlike setMutationApplyToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        var r = t.value.clone(), i = cn(t.fieldTransforms, e, n.transformResults);
        r.setAll(i), e.convertToFoundDocument(n.version, r).setHasCommittedMutations();
    }(t, e, n) : t instanceof an ? function(t, e, n) {
        if (Ze(t.precondition, e)) {
            var r = cn(t.fieldTransforms, e, n.transformResults), i = e.data;
            i.setAll(un(t)), i.setAll(r), e.convertToFoundDocument(n.version, i).setHasCommittedMutations();
        } else e.convertToUnknownDocument(n.version);
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        e.convertToNoDocument(n.version).setHasCommittedMutations();
    }(0, e, n);
}

/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 */ function en(t, e, n) {
    t instanceof sn ? function(t, e, n) {
        if (Ze(t.precondition, e)) {
            var r = t.value.clone(), i = hn(t.fieldTransforms, n, e);
            r.setAll(i), e.convertToFoundDocument(on(e), r).setHasLocalMutations();
        }
    }(t, e, n) : t instanceof an ? function(t, e, n) {
        if (Ze(t.precondition, e)) {
            var r = hn(t.fieldTransforms, n, e), i = e.data;
            i.setAll(un(t)), i.setAll(r), e.convertToFoundDocument(on(e), i).setHasLocalMutations();
        }
    }(t, e, n) : function(t, e) {
        Ze(t.precondition, e) && 
        // We don't call `setHasLocalMutations()` since we want to be backwards
        // compatible with the existing SDK behavior.
        e.convertToNoDocument(lt.min());
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function nn(t, e) {
    for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
        var o = i[r], s = e.data.field(o.field), a = Ue(o.transform, s || null);
        null != a && (null == n && (n = Ht.empty()), n.set(o.field, a));
    }
    return n || null;
}

function rn(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !!function(t, e) {
        return void 0 === t && void 0 === e || !(!t || !e) && ct(t, e, (function(t, e) {
            return function(t, e) {
                return t.field.isEqual(e.field) && function(t, e) {
                    return t instanceof je && e instanceof je || t instanceof Ge && e instanceof Ge ? ct(t.elements, e.elements, Pt) : t instanceof Qe && e instanceof Qe ? Pt(t.N, e.N) : t instanceof Be && e instanceof Be;
                }(t.transform, e.transform);
            }(t, e);
        }));
    }(t.fieldTransforms, e.fieldTransforms) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function on(t) {
    return t.isFoundDocument() ? t.version : lt.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var sn = /** @class */ function(e) {
    function n(t, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (o = e.call(this) || this).key = t, o.value = n, o.precondition = r, o.fieldTransforms = i, 
        o.type = 0 /* Set */ , o;
    }
    return t(n, e), n;
}($e), an = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        void 0 === o && (o = []);
        var s = this;
        return (s = e.call(this) || this).key = t, s.data = n, s.fieldMask = r, s.precondition = i, 
        s.fieldTransforms = o, s.type = 1 /* Patch */ , s;
    }
    return t(n, e), n;
}($e);

function un(t) {
    var e = new Map;
    return t.fieldMask.fields.forEach((function(n) {
        if (!n.isEmpty()) {
            var r = t.data.field(n);
            e.set(n, r);
        }
    })), e
    /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */;
}

function cn(t, e, n) {
    var r = new Map;
    G(t.length === n.length);
    for (var i = 0; i < n.length; i++) {
        var o = t[i], s = o.transform, a = e.data.field(o.field);
        r.set(o.field, qe(s, a, n[i]));
    }
    return r;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The current state of the document after applying all
 *     previous mutations.
 * @returns The transform results list.
 */ function hn(t, e, n) {
    for (var r = new Map, i = 0, o = t; i < o.length; i++) {
        var s = o[i], a = s.transform, u = n.data.field(s.field);
        r.set(s.field, Ve(a, u, e));
    }
    return r;
}

/** A mutation that deletes the document at the given key. */ var fn, ln, dn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.precondition = n, r.type = 2 /* Delete */ , 
        r.fieldTransforms = [], r;
    }
    return t(n, e), n;
}($e), pn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.precondition = n, r.type = 3 /* Verify */ , 
        r.fieldTransforms = [], r;
    }
    return t(n, e), n;
}($e), yn = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function vn(t) {
    switch (t) {
      default:
        return K();

      case W.CANCELLED:
      case W.UNKNOWN:
      case W.DEADLINE_EXCEEDED:
      case W.RESOURCE_EXHAUSTED:
      case W.INTERNAL:
      case W.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case W.UNAUTHENTICATED:
        return !1;

      case W.INVALID_ARGUMENT:
      case W.NOT_FOUND:
      case W.ALREADY_EXISTS:
      case W.PERMISSION_DENIED:
      case W.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case W.ABORTED:
      case W.OUT_OF_RANGE:
      case W.UNIMPLEMENTED:
      case W.DATA_LOSS:
        return !0;
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function mn(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return U("GRPC error has no .code"), W.UNKNOWN;
    switch (t) {
      case fn.OK:
        return W.OK;

      case fn.CANCELLED:
        return W.CANCELLED;

      case fn.UNKNOWN:
        return W.UNKNOWN;

      case fn.DEADLINE_EXCEEDED:
        return W.DEADLINE_EXCEEDED;

      case fn.RESOURCE_EXHAUSTED:
        return W.RESOURCE_EXHAUSTED;

      case fn.INTERNAL:
        return W.INTERNAL;

      case fn.UNAVAILABLE:
        return W.UNAVAILABLE;

      case fn.UNAUTHENTICATED:
        return W.UNAUTHENTICATED;

      case fn.INVALID_ARGUMENT:
        return W.INVALID_ARGUMENT;

      case fn.NOT_FOUND:
        return W.NOT_FOUND;

      case fn.ALREADY_EXISTS:
        return W.ALREADY_EXISTS;

      case fn.PERMISSION_DENIED:
        return W.PERMISSION_DENIED;

      case fn.FAILED_PRECONDITION:
        return W.FAILED_PRECONDITION;

      case fn.ABORTED:
        return W.ABORTED;

      case fn.OUT_OF_RANGE:
        return W.OUT_OF_RANGE;

      case fn.UNIMPLEMENTED:
        return W.UNIMPLEMENTED;

      case fn.DATA_LOSS:
        return W.DATA_LOSS;

      default:
        return K();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (ln = fn || (fn = {}))[ln.OK = 0] = "OK", ln[ln.CANCELLED = 1] = "CANCELLED", 
ln[ln.UNKNOWN = 2] = "UNKNOWN", ln[ln.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
ln[ln.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ln[ln.NOT_FOUND = 5] = "NOT_FOUND", 
ln[ln.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ln[ln.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
ln[ln.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ln[ln.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
ln[ln.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ln[ln.ABORTED = 10] = "ABORTED", 
ln[ln.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ln[ln.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
ln[ln.INTERNAL = 13] = "INTERNAL", ln[ln.UNAVAILABLE = 14] = "UNAVAILABLE", ln[ln.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var gn = /** @class */ function() {
    function t(t, e) {
        this.comparator = t, this.root = e || bn.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.insert = function(e, n) {
        return new t(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, bn.BLACK, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.comparator, this.root.remove(e, this.comparator).copy(null, null, bn.BLACK, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.isEmpty(); ) {
            var n = this.comparator(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.isEmpty(); ) {
            var r = this.comparator(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.isEmpty = function() {
        return this.root.isEmpty();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.minKey = function() {
        return this.root.minKey();
    }, 
    // Returns the maximum key in the map.
    t.prototype.maxKey = function() {
        return this.root.maxKey();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.inorderTraversal = function(t) {
        return this.root.inorderTraversal(t);
    }, t.prototype.forEach = function(t) {
        this.inorderTraversal((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.inorderTraversal((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.reverseTraversal = function(t) {
        return this.root.reverseTraversal(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.getIterator = function() {
        return new wn(this.root, null, this.comparator, !1);
    }, t.prototype.getIteratorFrom = function(t) {
        return new wn(this.root, t, this.comparator, !1);
    }, t.prototype.getReverseIterator = function() {
        return new wn(this.root, null, this.comparator, !0);
    }, t.prototype.getReverseIteratorFrom = function(t) {
        return new wn(this.root, t, this.comparator, !0);
    }, t;
}(), wn = /** @class */ function() {
    function t(t, e, n, r) {
        this.isReverse = r, this.nodeStack = [];
        for (var i = 1; !t.isEmpty(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.isReverse ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.nodeStack.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
        }
    }
    return t.prototype.getNext = function() {
        var t = this.nodeStack.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right; else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), 
        t = t.left;
        return e;
    }, t.prototype.hasNext = function() {
        return this.nodeStack.length > 0;
    }, t.prototype.peek = function() {
        if (0 === this.nodeStack.length) return null;
        var t = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), bn = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.isEmpty = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.inorderTraversal = function(t) {
        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.reverseTraversal = function(t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.isEmpty() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.minKey = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.maxKey = function() {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.insert = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp();
    }, t.prototype.removeMin = function() {
        if (this.left.isEmpty()) return t.EMPTY;
        var e = this;
        return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), 
            0 === n(e, i.key)) {
                if (i.right.isEmpty()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.fixUp();
    }, t.prototype.isRed = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.fixUp = function() {
        var t = this;
        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), 
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
    }, t.prototype.moveRedLeft = function() {
        var t = this.colorFlip();
        return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), 
        t;
    }, t.prototype.moveRedRight = function() {
        var t = this.colorFlip();
        return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t;
    }, t.prototype.rotateLeft = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.rotateRight = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.colorFlip = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.checkMaxDepth = function() {
        var t = this.check();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.check = function() {
        if (this.isRed() && this.left.isRed()) throw K();
        if (this.right.isRed()) throw K();
        var t = this.left.check();
        if (t !== this.right.check()) throw K();
        return t + (this.isRed() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
bn.EMPTY = null, bn.RED = !0, bn.BLACK = !1, 
// end LLRBEmptyNode
bn.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw K();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw K();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw K();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw K();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw K();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.insert = function(t, e, n) {
        return new bn(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.isEmpty = function() {
        return !0;
    }, t.prototype.inorderTraversal = function(t) {
        return !1;
    }, t.prototype.reverseTraversal = function(t) {
        return !1;
    }, t.prototype.minKey = function() {
        return null;
    }, t.prototype.maxKey = function() {
        return null;
    }, t.prototype.isRed = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.checkMaxDepth = function() {
        return !0;
    }, t.prototype.check = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var In = /** @class */ function() {
    function t(t) {
        this.comparator = t, this.data = new gn(this.comparator);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.minKey();
    }, t.prototype.last = function() {
        return this.data.maxKey();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.inorderTraversal((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ t.prototype.forEachInRange = function(t, e) {
        for (var n = this.data.getIteratorFrom(t[0]); n.hasNext(); ) {
            var r = n.getNext();
            if (this.comparator(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */
    t.prototype.forEachWhile = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) if (!t(n.getNext().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.firstAfterOrEqual = function(t) {
        var e = this.data.getIteratorFrom(t);
        return e.hasNext() ? e.getNext().key : null;
    }, t.prototype.getIterator = function() {
        return new Tn(this.data.getIterator());
    }, t.prototype.getIteratorFrom = function(t) {
        return new Tn(this.data.getIteratorFrom(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).insert(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.isEmpty = function() {
        return this.data.isEmpty();
    }, t.prototype.unionWith = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.getIterator(), r = e.data.getIterator(); n.hasNext(); ) {
            var i = n.getNext().key, o = r.getNext().key;
            if (0 !== this.comparator(i, o)) return !1;
        }
        return !0;
    }, t.prototype.toArray = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.comparator);
        return n.data = e, n;
    }, t;
}(), Tn = /** @class */ function() {
    function t(t) {
        this.iter = t;
    }
    return t.prototype.getNext = function() {
        return this.iter.getNext().key;
    }, t.prototype.hasNext = function() {
        return this.iter.hasNext();
    }, t;
}(), En = new gn(Lt.comparator);

function Sn() {
    return En;
}

var _n = new gn(Lt.comparator);

function kn() {
    return _n;
}

var An = new gn(Lt.comparator);

function Dn() {
    return An;
}

var Nn = new In(Lt.comparator);

function Cn() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Nn, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var xn = new In(ut);

function Rn() {
    return xn;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ var Ln = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, 
        this.resolvedLimboDocuments = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.createSynthesizedRemoteEventForCurrentChange = function(e, n) {
        var r = new Map;
        return r.set(e, On.createSynthesizedTargetChangeForCurrentChange(e, n)), new t(lt.min(), r, Rn(), Sn(), Cn());
    }, t;
}(), On = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, 
        this.removedDocuments = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.createSynthesizedTargetChangeForCurrentChange = function(e, n) {
        return new t(Tt.EMPTY_BYTE_STRING, n, Cn(), Cn(), Cn());
    }, t;
}(), Pn = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.$ = t, this.removedTargetIds = e, this.key = n, this.F = r;
}, Fn = function(t, e) {
    this.targetId = t, this.O = e;
}, Mn = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = Tt.EMPTY_BYTE_STRING), void 0 === r && (r = null), this.state = t, 
    this.targetIds = e, this.resumeToken = n, this.cause = r;
}, Vn = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.M = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.L = Bn(), 
        /** See public getters for explanations of these fields. */
        this.B = Tt.EMPTY_BYTE_STRING, this.U = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.q = !0;
    }
    return Object.defineProperty(t.prototype, "current", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.U;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.B;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "K", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.M;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "j", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.q;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.W = function(t) {
        t.approximateByteSize() > 0 && (this.q = !0, this.B = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.G = function() {
        var t = Cn(), e = Cn(), n = Cn();
        return this.L.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                K();
            }
        })), new On(this.B, this.U, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.H = function() {
        this.q = !1, this.L = Bn();
    }, t.prototype.J = function(t, e) {
        this.q = !0, this.L = this.L.insert(t, e);
    }, t.prototype.Y = function(t) {
        this.q = !0, this.L = this.L.remove(t);
    }, t.prototype.X = function() {
        this.M += 1;
    }, t.prototype.Z = function() {
        this.M -= 1;
    }, t.prototype.tt = function() {
        this.q = !0, this.U = !0;
    }, t;
}(), qn = /** @class */ function() {
    function t(t) {
        this.et = t, 
        /** The internal state of all tracked targets. */
        this.nt = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.st = Sn(), 
        /** A mapping of document keys to their set of target IDs. */
        this.it = Un(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.rt = new In(ut)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.ot = function(t) {
        for (var e = 0, n = t.$; e < n.length; e++) {
            var r = n[e];
            t.F && t.F.isFoundDocument() ? this.at(r, t.F) : this.ct(r, t.key, t.F);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.ct(s, t.key, t.F);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.ut = function(t) {
        var e = this;
        this.forEachTarget(t, (function(n) {
            var r = e.ht(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.lt(n) && r.W(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Z(), r.K || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.H(), r.W(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Z(), r.K || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.lt(n) && (r.tt(), r.W(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.lt(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.ft(n), r.W(t.resumeToken));
                break;

              default:
                K();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.forEachTarget = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.nt.forEach((function(t, r) {
            n.lt(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.dt = function(t) {
        var e = t.targetId, n = t.O.count, r = this.wt(e);
        if (r) {
            var i = r.target;
            if (ee(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new Lt(i.path);
                this.ct(e, o, Jt.newNoDocument(o, lt.min()));
            } else G(1 === n); else this._t(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.ft(e), this.rt = this.rt.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.gt = function(t) {
        var e = this, n = new Map;
        this.nt.forEach((function(r, i) {
            var o = e.wt(i);
            if (o) {
                if (r.current && ee(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new Lt(o.target.path);
                    null !== e.st.get(s) || e.yt(i, s) || e.ct(i, s, Jt.newNoDocument(s, t));
                }
                r.j && (n.set(i, r.G()), r.H());
            }
        }));
        var r = Cn();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.it.forEach((function(t, n) {
            var i = !0;
            n.forEachWhile((function(t) {
                var n = e.wt(t);
                return !n || 2 /* LimboResolution */ === n.purpose || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new Ln(t, n, this.rt, this.st, r);
        return this.st = Sn(), this.it = Un(), this.rt = new In(ut), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.at = function(t, e) {
        if (this.lt(t)) {
            var n = this.yt(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.ht(t).J(e.key, n), this.st = this.st.insert(e.key, e), this.it = this.it.insert(e.key, this.Tt(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.ct = function(t, e, n) {
        if (this.lt(t)) {
            var r = this.ht(t);
            this.yt(t, e) ? r.J(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Y(e), this.it = this.it.insert(e, this.Tt(e).delete(t)), n && (this.st = this.st.insert(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.nt.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype._t = function(t) {
        var e = this.ht(t).G();
        return this.et.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.X = function(t) {
        this.ht(t).X();
    }, t.prototype.ht = function(t) {
        var e = this.nt.get(t);
        return e || (e = new Vn, this.nt.set(t, e)), e;
    }, t.prototype.Tt = function(t) {
        var e = this.it.get(t);
        return e || (e = new In(ut), this.it = this.it.insert(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.lt = function(t) {
        var e = null !== this.wt(t);
        return e || q("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.wt = function(t) {
        var e = this.nt.get(t);
        return e && e.K ? null : this.et.Et(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.ft = function(t) {
        var e = this;
        this.nt.set(t, new Vn), this.et.getRemoteKeysForTarget(t).forEach((function(n) {
            e.ct(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.yt = function(t, e) {
        return this.et.getRemoteKeysForTarget(t).has(e);
    }, t;
}();

/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */ function Un() {
    return new gn(Lt.comparator);
}

function Bn() {
    return new gn(Lt.comparator);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var jn = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, Kn = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, Gn = function(t, e) {
    this.databaseId = t, this.C = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function zn(t, e) {
    return t.C ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function Qn(t, e) {
    return t.C ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function Wn(t, e) {
    return zn(t, e.toTimestamp());
}

function Hn(t) {
    return G(!!t), lt.fromTimestamp(function(t) {
        var e = St(t);
        return new ft(e.seconds, e.nanos);
    }(t));
}

function Yn(t, e) {
    return function(t) {
        return new mt([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).canonicalString();
}

function Jn(t) {
    var e = mt.fromString(t);
    return G(br(e)), e;
}

function Xn(t, e) {
    return Yn(t.databaseId, e.path);
}

function Zn(t, e) {
    var n = Jn(e);
    if (n.get(1) !== t.databaseId.projectId) throw new H(W.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new H(W.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new Lt(nr(n));
}

function $n(t, e) {
    return Yn(t.databaseId, e);
}

function tr(t) {
    var e = Jn(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? mt.emptyPath() : nr(e);
}

function er(t) {
    return new mt([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
}

function nr(t) {
    return G(t.length > 4 && "documents" === t.get(4)), t.popFirst(5)
    /** Creates a Document proto from key and fields (but no create/update time) */;
}

function rr(t, e, n) {
    return {
        name: Xn(t, e),
        fields: n.value.mapValue.fields
    };
}

function ir(t, e, n) {
    var r = Zn(t, e.name), i = Hn(e.updateTime), o = new Ht({
        mapValue: {
            fields: e.fields
        }
    }), s = Jt.newFoundDocument(r, i, o);
    return n && s.setHasCommittedMutations(), n ? s.setHasCommittedMutations() : s;
}

function or(t, e) {
    var n;
    if (e instanceof sn) n = {
        update: rr(t, e.key, e.value)
    }; else if (e instanceof dn) n = {
        delete: Xn(t, e.key)
    }; else if (e instanceof an) n = {
        update: rr(t, e.key, e.data),
        updateMask: wr(e.fieldMask)
    }; else {
        if (!(e instanceof pn)) return K();
        n = {
            verify: Xn(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((function(t) {
        return function(t, e) {
            var n = e.transform;
            if (n instanceof Be) return {
                fieldPath: e.field.canonicalString(),
                setToServerValue: "REQUEST_TIME"
            };
            if (n instanceof je) return {
                fieldPath: e.field.canonicalString(),
                appendMissingElements: {
                    values: n.elements
                }
            };
            if (n instanceof Ge) return {
                fieldPath: e.field.canonicalString(),
                removeAllFromArray: {
                    values: n.elements
                }
            };
            if (n instanceof Qe) return {
                fieldPath: e.field.canonicalString(),
                increment: n.N
            };
            throw K();
        }(0, t);
    }))), e.precondition.isNone || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: Wn(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : K();
    }(t, e.precondition)), n;
}

function sr(t, e) {
    var n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? Xe.updateTime(Hn(t.updateTime)) : void 0 !== t.exists ? Xe.exists(t.exists) : Xe.none();
    }(e.currentDocument) : Xe.none(), r = e.updateTransforms ? e.updateTransforms.map((function(e) {
        return function(t, e) {
            var n = null;
            if ("setToServerValue" in e) G("REQUEST_TIME" === e.setToServerValue), n = new Be; else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new je(r);
            } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new Ge(i);
            } else "increment" in e ? n = new Qe(t, e.increment) : K();
            var o = wt.fromServerFormat(e.fieldPath);
            return new Ye(o, n);
        }(t, e);
    })) : [];
    if (e.update) {
        e.update.name;
        var i = Zn(t, e.update.name), o = new Ht({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            var s = function(t) {
                var e = t.fieldPaths || [];
                return new bt(e.map((function(t) {
                    return wt.fromServerFormat(t);
                })));
            }(e.updateMask);
            return new an(i, o, s, n, r);
        }
        return new sn(i, o, n, r);
    }
    if (e.delete) {
        var a = Zn(t, e.delete);
        return new dn(a, n);
    }
    if (e.verify) {
        var u = Zn(t, e.verify);
        return new pn(u, n);
    }
    return K();
}

function ar(t, e) {
    return {
        documents: [ $n(t, e.path) ]
    };
}

function ur(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = $n(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = $n(t, r.popLast()), n.structuredQuery.from = [ {
        collectionId: r.lastSegment()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (zt(t.value)) return {
                            unaryFilter: {
                                field: yr(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (Gt(t.value)) return {
                            unaryFilter: {
                                field: yr(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (zt(t.value)) return {
                            unaryFilter: {
                                field: yr(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (Gt(t.value)) return {
                            unaryFilter: {
                                field: yr(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: yr(t.field),
                            op: pr(t.op),
                            value: t.value
                        }
                    };
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            // visible for testing
            return function(t) {
                return {
                    field: yr(t.field),
                    direction: dr(t.dir)
                };
            }(t);
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = function(t, e) {
        return t.C || Ct(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = fr(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = fr(e.endAt)), n;
}

function cr(t) {
    var e = tr(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
    if (r > 0) {
        G(1 === r);
        var o = n.from[0];
        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
    }
    var s = [];
    n.where && (s = hr(n.where));
    var a = [];
    n.orderBy && (a = n.orderBy.map((function(t) {
        return function(t) {
            return new de(vr(t.field), 
            // visible for testing
            function(t) {
                switch (t) {
                  case "ASCENDING":
                    return "asc" /* ASCENDING */;

                  case "DESCENDING":
                    return "desc" /* DESCENDING */;

                  default:
                    return;
                }
            }(t.direction));
        }(t);
    })));
    var u = null;
    n.limit && (u = function(t) {
        var e;
        return Ct(e = "object" == typeof t ? t.value : t) ? null : e;
    }(n.limit));
    var c = null;
    n.startAt && (c = lr(n.startAt));
    var h = null;
    return n.endAt && (h = lr(n.endAt)), ge(e, i, a, s, u, "F" /* First */ , c, h);
}

function hr(t) {
    return t ? void 0 !== t.unaryFilter ? [ gr(t) ] : void 0 !== t.fieldFilter ? [ mr(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
        return hr(t);
    })).reduce((function(t, e) {
        return t.concat(e);
    })) : K() : [];
}

function fr(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function lr(t) {
    var e = !!t.before, n = t.values || [];
    return new fe(n, e);
}

// visible for testing
function dr(t) {
    return jn[t];
}

function pr(t) {
    return Kn[t];
}

function yr(t) {
    return {
        fieldPath: t.canonicalString()
    };
}

function vr(t) {
    return wt.fromServerFormat(t.fieldPath);
}

function mr(t) {
    return ne.create(vr(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          default:
            return K();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function gr(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = vr(t.unaryFilter.field);
        return ne.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = vr(t.unaryFilter.field);
        return ne.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        var r = vr(t.unaryFilter.field);
        return ne.create(r, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        var i = vr(t.unaryFilter.field);
        return ne.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      default:
        return K();
    }
}

function wr(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.canonicalString());
    })), {
        fieldPaths: e
    };
}

function br(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function Ir(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = Er(e)), e = Tr(t.get(n), e);
    return Er(e);
}

/** Encodes a single segment of a resource path into the given result */ function Tr(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Er(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function Sr(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (G(e >= 2), 2 === e) return G("" === t.charAt(0) && "" === t.charAt(1)), mt.emptyPath();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);
        switch ((s < 0 || s > n) && K(), t.charAt(s + 1)) {
          case "":
            var a = t.substring(o, s), u = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            u = a : (u = i += a, i = ""), r.push(u);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            K();
        }
        o = s + 2;
    }
    return new mt(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 */
/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ var _r = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, kr = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
kr.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
kr.key = "owner";

/**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */
var Ar = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Ar.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Ar.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var Dr = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ Dr.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
Dr.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
Dr.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
Dr.userMutationsKeyPath = [ "userId", "batchId" ];

/**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */
var Nr = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, Ir(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, Ir(e), n ];
    }, t;
}();

Nr.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
Nr.PLACEHOLDER = new Nr;

/**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */
var Cr = function(t, e) {
    this.path = t, this.readTime = e;
}, xr = function(t, e) {
    this.path = t, this.version = e;
}, Rr = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ Rr.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
Rr.readTimeIndex = "readTimeIndex", Rr.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
Rr.collectionReadTimeIndex = "collectionReadTimeIndex", Rr.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var Lr = 
/**
     * @param byteSize - Approximately the total size in bytes of all the
     * documents in the document cache.
     */
function(t) {
    this.byteSize = t;
};

Lr.store = "remoteDocumentGlobal", Lr.key = "remoteDocumentGlobalKey";

/**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */
var Or = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

Or.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Or.keyPath = "targetId", 
/** The name of the queryTargets index. */
Or.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
Or.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var Pr = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ Pr.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
Pr.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
Pr.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
Pr.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var Fr = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Fr.key = "targetGlobalKey", Fr.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var Mr = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ Mr.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
Mr.keyPath = [ "collectionId", "parent" ];

/**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */
var Vr = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ Vr.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
Vr.keyPath = "clientId";

/**
 * A object representing a bundle loaded by the SDK.
 */
var qr = function(
/** The ID of the loaded bundle. */
t, 
/** The create time of the loaded bundle. */
e, 
/** The schema version of the loaded bundle. */
n) {
    this.bundleId = t, this.createTime = e, this.version = n;
};

/** Name of the IndexedDb object store. */ qr.store = "bundles", qr.keyPath = "bundleId";

/**
 * A object representing a named query loaded by the SDK via a bundle.
 */
var Ur = function(
/** The name of the query. */
t, 
/** The read time of the results saved in the bundle from the named query. */
e, 
/** The query saved in the bundle. */
n) {
    this.name = t, this.readTime = e, this.bundledQuery = n;
};

/** Name of the IndexedDb object store. */ Ur.store = "namedQueries", Ur.keyPath = "name";

// Visible for testing
var Br = e(e([], e(e([], e(e([], e(e([], [ Ar.store, Dr.store, Nr.store, Rr.store, Or.store, kr.store, Fr.store, Pr.store ]), [ Vr.store ])), [ Lr.store ])), [ Mr.store ])), [ qr.store, Ur.store ]), jr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Kr = /** @class */ function() {
    function t() {
        this.onCommittedListeners = [];
    }
    return t.prototype.addOnCommittedListener = function(t) {
        this.onCommittedListeners.push(t);
    }, t.prototype.raiseOnCommittedEvent = function() {
        this.onCommittedListeners.forEach((function(t) {
            return t();
        }));
    }, t;
}(), Gr = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.nextCallback = null, this.catchCallback = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.isDone = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.callbackAttached = !1, t((function(t) {
            e.isDone = !0, e.result = t, e.nextCallback && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.nextCallback(t);
        }), (function(t) {
            e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.callbackAttached && K(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new t((function(t, i) {
            r.nextCallback = function(n) {
                r.wrapSuccess(e, n).next(t, i);
            }, r.catchCallback = function(e) {
                r.wrapFailure(n, e).next(t, i);
            };
        }));
    }, t.prototype.toPromise = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.wrapUserFunction = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.wrapSuccess = function(e, n) {
        return e ? this.wrapUserFunction((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.wrapFailure = function(e, n) {
        return e ? this.wrapUserFunction((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.waitFor = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.or = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.waitFor(r);
    }, t;
}(), zr = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.action = t, this.transaction = e, this.aborted = !1, 
        /**
             * A `Promise` that resolves with the result of the IndexedDb transaction.
             */
        this.It = new Y, this.transaction.oncomplete = function() {
            n.It.resolve();
        }, this.transaction.onabort = function() {
            e.error ? n.It.reject(new Hr(t, e.error)) : n.It.resolve();
        }, this.transaction.onerror = function(e) {
            var r = $r(e.target.error);
            n.It.reject(new Hr(t, r));
        };
    }
    return t.open = function(e, n, r, i) {
        try {
            return new t(n, e.transaction(i, r));
        } catch (e) {
            throw new Hr(n, e);
        }
    }, Object.defineProperty(t.prototype, "At", {
        get: function() {
            return this.It.promise;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.It.reject(t), this.aborted || (q("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new Jr(e);
    }, t;
}(), Qr = /** @class */ function() {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    function t(e, n, r) {
        this.name = e, this.version = n, this.Rt = r, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.Pt(l()) && U("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    return t.delete = function(t) {
        return q("SimpleDb", "Removing database:", t), Xr(window.indexedDB.deleteDatabase(t)).toPromise();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ t.bt = function() {
        if (!E()) return !1;
        if (t.vt()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var e = l(), n = t.Pt(e), r = 0 < n && n < 10, i = t.Vt(e), o = 0 < i && i < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || o);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.vt = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.St);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ t.Dt = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.Pt = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.Vt = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    t.prototype.Ct = function(t) {
        return n(this, void 0, void 0, (function() {
            var e, n = this;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.db ? [ 3 /*break*/ , 2 ] : (q("SimpleDb", "Opening database:", this.name), 
                    e = this, [ 4 /*yield*/ , new Promise((function(e, r) {
                        // TODO(mikelehen): Investigate browser compatibility.
                        // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                        // suggests IE9 and older WebKit browsers handle upgrade
                        // differently. They expect setVersion, as described here:
                        // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                        var i = indexedDB.open(n.name, n.version);
                        i.onsuccess = function(t) {
                            var n = t.target.result;
                            e(n);
                        }, i.onblocked = function() {
                            r(new Hr(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                        }, i.onerror = function(e) {
                            var n = e.target.error;
                            "VersionError" === n.name ? r(new H(W.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === n.name ? r(new H(W.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + n)) : r(new Hr(t, n));
                        }, i.onupgradeneeded = function(t) {
                            q("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            n.Rt.Nt(e, i.transaction, t.oldVersion, n.version).next((function() {
                                q("SimpleDb", "Database upgrade to version " + n.version + " complete");
                            }));
                        };
                    })) ]);

                  case 1:
                    e.db = r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ , (this.kt && (this.db.onversionchange = function(t) {
                        return n.kt(t);
                    }), this.db) ];
                }
            }));
        }));
    }, t.prototype.xt = function(t) {
        this.kt = t, this.db && (this.db.onversionchange = function(e) {
            return t(e);
        });
    }, t.prototype.runTransaction = function(t, e, i, o) {
        return n(this, void 0, void 0, (function() {
            var n, s, a, u, c;
            return r(this, (function(h) {
                switch (h.label) {
                  case 0:
                    n = "readonly" === e, s = 0, a = function() {
                        var e, a, c, h, f;
                        return r(this, (function(r) {
                            switch (r.label) {
                              case 0:
                                ++s, r.label = 1;

                              case 1:
                                return r.trys.push([ 1, 4, , 5 ]), [ 4 /*yield*/ , u.Ct(t) ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.db = r.sent(), e = zr.open(u.db, t, n ? "readonly" : "readwrite", i), a = o(e).catch((function(t) {
                                    // Abort the transaction if there was an error.
                                    return e.abort(t), Gr.reject(t);
                                })).toPromise(), c = {}, a.catch((function() {})), [ 4 /*yield*/ , e.At ];

                              case 3:
                                return [ 2 /*return*/ , (c.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                r.sent(), a), c) ];

                              case 4:
                                return h = r.sent(), f = "FirebaseError" !== h.name && s < 3, q("SimpleDb", "Transaction failed with error:", h.message, "Retrying:", f), 
                                u.close(), f ? [ 3 /*break*/ , 5 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(h)
                                } ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, u = this, h.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , a() ];

                  case 2:
                    if ("object" == typeof (c = h.sent())) return [ 2 /*return*/ , c.value ];
                    h.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db && this.db.close(), this.db = void 0;
    }, t;
}(), Wr = /** @class */ function() {
    function t(t) {
        this.$t = t, this.Ft = !1, this.Ot = null;
    }
    return Object.defineProperty(t.prototype, "isDone", {
        get: function() {
            return this.Ft;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Mt", {
        get: function() {
            return this.Ot;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.$t = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.Ft = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.Lt = function(t) {
        this.Ot = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return Xr(this.$t.delete());
    }, t;
}(), Hr = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, W.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + n) || this).name = "IndexedDbTransactionError", 
        r;
    }
    return t(n, e), n;
}(H);

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function Yr(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */ var Jr = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (q("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (q("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), Xr(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value - The object to write.
     * @returns The key of the value to add.
     */
    t.prototype.add = function(t) {
        return q("SimpleDb", "ADD", this.store.name, t, t), Xr(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @returns The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return Xr(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), q("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return q("SimpleDb", "DELETE", this.store.name, t), Xr(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return q("SimpleDb", "COUNT", this.store.name), Xr(this.store.count());
    }, t.prototype.Bt = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.Ut(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.qt = function(t, e) {
        q("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.Kt = !1;
        var r = this.cursor(n);
        return this.Ut(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.jt = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.Ut(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.Qt = function(t) {
        var e = this.cursor({});
        return new Gr((function(n, r) {
            e.onerror = function(t) {
                var e = $r(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.Ut = function(t, e) {
        var n = [];
        return new Gr((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new Wr(i), s = e(i.primaryKey, i.value, o);
                    if (s instanceof Gr) {
                        var a = s.catch((function(t) {
                            return o.done(), Gr.reject(t);
                        }));
                        n.push(a);
                    }
                    o.isDone ? r() : null === o.Mt ? i.continue() : i.continue(o.Mt);
                } else r();
            };
        })).next((function() {
            return Gr.waitFor(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.Kt ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */ function Xr(t) {
    return new Gr((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = $r(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var Zr = !1;

function $r(t) {
    var e = Qr.Pt(l());
    if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var r = new H("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return Zr || (Zr = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw r;
            }), 0)), r;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ti = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Wt = t, r.currentSequenceNumber = n, r;
    }
    return t(n, e), n;
}(Kr);

function ei(t, e) {
    var n = Q(t);
    return Qr.Dt(n.Wt, e);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ var ni = /** @class */ function() {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.applyToRemoteDocument = function(t, e) {
        for (var n = e.mutationResults, r = 0; r < this.mutations.length; r++) {
            var i = this.mutations[r];
            i.key.isEqual(t.key) && tn(i, t, n[r]);
        }
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     */
    t.prototype.applyToLocalView = function(t) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var e = 0, n = this.baseMutations; e < n.length; e++) {
            var r = n[e];
            r.key.isEqual(t.key) && en(r, t, this.localWriteTime);
        }
        // Second, apply all user-provided mutations.
                for (var i = 0, o = this.mutations; i < o.length; i++) {
            var s = o[i];
            s.key.isEqual(t.key) && en(s, t, this.localWriteTime);
        }
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.applyToLocalDocumentSet = function(t) {
        var e = this;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                this.mutations.forEach((function(n) {
            var r = t.get(n.key), i = r;
            // TODO(mutabledocuments): This method should take a MutableDocumentMap
            // and we should remove this cast.
                        e.applyToLocalView(i), r.isValidDocument() || i.convertToNoDocument(lt.min());
        }));
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), Cn());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && ct(this.mutations, t.mutations, (function(t, e) {
            return rn(t, e);
        })) && ct(this.baseMutations, t.baseMutations, (function(t, e) {
            return rn(t, e);
        }));
    }, t;
}(), ri = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        G(e.mutations.length === r.length);
        for (var i = Dn(), o = e.mutations, s = 0; s < o.length; s++) i = i.insert(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), ii = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = lt.min()), void 0 === o && (o = lt.min()), void 0 === s && (s = Tt.EMPTY_BYTE_STRING), 
        this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.withSequenceNumber = function(e) {
        return new t(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.withResumeToken = function(e, n) {
        return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.withLastLimboFreeSnapshotVersion = function(e) {
        return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken);
    }, t;
}(), oi = function(t) {
    this.Gt = t;
};

/** The result of applying a mutation batch to the backend. */
/** Decodes a remote document from storage locally to a Document. */ function si(t, e) {
    if (e.document) return ir(t.Gt, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        var n = Lt.fromSegments(e.noDocument.path), r = fi(e.noDocument.readTime), i = Jt.newNoDocument(n, r);
        return e.hasCommittedMutations ? i.setHasCommittedMutations() : i;
    }
    if (e.unknownDocument) {
        var o = Lt.fromSegments(e.unknownDocument.path), s = fi(e.unknownDocument.version);
        return Jt.newUnknownDocument(o, s);
    }
    return K();
}

/** Encodes a document for storage locally. */ function ai(t, e, n) {
    var r = ui(n), i = e.key.path.popLast().toArray();
    if (e.isFoundDocument()) {
        var o = function(t, e) {
            return {
                name: Xn(t, e.key),
                fields: e.data.value.mapValue.fields,
                updateTime: zn(t, e.version.toTimestamp())
            };
        }(t.Gt, e), s = e.hasCommittedMutations;
        return new Rr(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, o, s, r, i);
    }
    if (e.isNoDocument()) {
        var a = e.key.path.toArray(), u = hi(e.version), c = e.hasCommittedMutations;
        return new Rr(
        /* unknownDocument= */ null, new Cr(a, u), 
        /* document= */ null, c, r, i);
    }
    if (e.isUnknownDocument()) {
        var h = e.key.path.toArray(), f = hi(e.version);
        return new Rr(new xr(h, f), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, r, i);
    }
    return K();
}

function ui(t) {
    var e = t.toTimestamp();
    return [ e.seconds, e.nanoseconds ];
}

function ci(t) {
    var e = new ft(t[0], t[1]);
    return lt.fromTimestamp(e);
}

function hi(t) {
    var e = t.toTimestamp();
    return new _r(e.seconds, e.nanoseconds);
}

function fi(t) {
    var e = new ft(t.seconds, t.nanoseconds);
    return lt.fromTimestamp(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */ function li(t, e) {
    // Squash old transform mutations into existing patch or set mutations.
    // The replacement of representing `transforms` with `update_transforms`
    // on the SDK means that old `transform` mutations stored in IndexedDB need
    // to be updated to `update_transforms`.
    // TODO(b/174608374): Remove this code once we perform a schema migration.
    for (var n = (e.baseMutations || []).map((function(e) {
        return sr(t.Gt, e);
    })), r = 0; r < e.mutations.length - 1; ++r) {
        var i = e.mutations[r];
        if (r + 1 < e.mutations.length && void 0 !== e.mutations[r + 1].transform) {
            var o = e.mutations[r + 1];
            i.updateTransforms = o.transform.fieldTransforms, e.mutations.splice(r + 1, 1), 
            ++r;
        }
    }
    var s = e.mutations.map((function(e) {
        return sr(t.Gt, e);
    })), a = ft.fromMillis(e.localWriteTimeMs);
    return new ni(e.batchId, a, n, s);
}

/** Decodes a DbTarget into TargetData */ function di(t) {
    var e, n, r = fi(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? fi(t.lastLimboFreeSnapshotVersion) : lt.min();
    return void 0 !== t.query.documents ? (G(1 === (n = t.query).documents.length), 
    e = ke(we(tr(n.documents[0])))) : e = function(t) {
        return ke(cr(t));
    }(t.query), new ii(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, r, i, Tt.fromBase64String(t.resumeToken))
    /** Encodes TargetData into a DbTarget for storage locally. */;
}

function pi(t, e) {
    var n, r = hi(e.snapshotVersion), i = hi(e.lastLimboFreeSnapshotVersion);
    n = ee(e.target) ? ar(t.Gt, e.target) : ur(t.Gt, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
    var o = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new Or(e.targetId, $t(e.target), r, o, e.sequenceNumber, i, n);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */ function yi(t) {
    var e = cr({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? Ae(e, e.limit, "L" /* Last */) : e;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var vi = /** @class */ function() {
    function t() {}
    return t.prototype.getBundleMetadata = function(t, e) {
        return mi(t).get(e).next((function(t) {
            if (t) return {
                id: (e = t).bundleId,
                createTime: fi(e.createTime),
                version: e.version
            };
            /** Encodes a DbBundle to a BundleMetadata object. */            var e;
            /** Encodes a BundleMetadata to a DbBundle. */        }));
    }, t.prototype.saveBundleMetadata = function(t, e) {
        return mi(t).put({
            bundleId: (n = e).id,
            createTime: hi(Hn(n.createTime)),
            version: n.version
        });
        var n;
        /** Encodes a DbNamedQuery to a NamedQuery. */    }, t.prototype.getNamedQuery = function(t, e) {
        return gi(t).get(e).next((function(t) {
            if (t) return {
                name: (e = t).name,
                query: yi(e.bundledQuery),
                readTime: fi(e.readTime)
            };
            var e;
            /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */        }));
    }, t.prototype.saveNamedQuery = function(t, e) {
        return gi(t).put(function(t) {
            return {
                name: t.name,
                readTime: hi(Hn(t.readTime)),
                bundledQuery: t.bundledQuery
            };
        }(e));
    }, t;
}();

/**
 * Helper to get a typed SimpleDbStore for the bundles object store.
 */ function mi(t) {
    return ei(t, qr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the namedQueries object store.
 */ function gi(t) {
    return ei(t, Ur.store);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ var wi = /** @class */ function() {
    function t() {
        this.zt = new bi;
    }
    return t.prototype.addToCollectionParentIndex = function(t, e) {
        return this.zt.add(e), Gr.resolve();
    }, t.prototype.getCollectionParents = function(t, e) {
        return Gr.resolve(this.zt.getEntries(e));
    }, t;
}(), bi = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.lastSegment(), n = t.popLast(), r = this.index[e] || new In(mt.comparator), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.lastSegment(), n = t.popLast(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new In(mt.comparator)).toArray();
    }, t;
}(), Ii = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.Ht = new bi;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.addToCollectionParentIndex = function(t, e) {
        var n = this;
        if (!this.Ht.has(e)) {
            var r = e.lastSegment(), i = e.popLast();
            t.addOnCommittedListener((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.Ht.add(e);
            }));
            var o = {
                collectionId: r,
                parent: Ir(i)
            };
            return Ti(t).put(o);
        }
        return Gr.resolve();
    }, t.prototype.getCollectionParents = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ ht(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Ti(t).Bt(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(Sr(o.parent));
            }
            return n;
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function Ti(t) {
    return ei(t, Mr.store);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ei = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0
}, Si = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
    }
    return t.withCacheSize = function(e) {
        return new t(e, t.DEFAULT_COLLECTION_PERCENTILE, t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */
function _i(t, e, n) {
    var r = t.store(Dr.store), i = t.store(Nr.store), o = [], s = IDBKeyRange.only(n.batchId), a = 0, u = r.jt({
        range: s
    }, (function(t, e, n) {
        return a++, n.delete();
    }));
    o.push(u.next((function() {
        G(1 === a);
    })));
    for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h], d = Nr.key(e, l.key.path, n.batchId);
        o.push(i.delete(d)), c.push(l.key);
    }
    return Gr.waitFor(o).next((function() {
        return c;
    }));
}

/**
 * Returns an approximate size for the given document.
 */ function ki(t) {
    if (!t) return 0;
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw K();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ Si.DEFAULT_COLLECTION_PERCENTILE = 10, 
Si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, Si.DEFAULT = new Si(41943040, Si.DEFAULT_COLLECTION_PERCENTILE, Si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), 
Si.DISABLED = new Si(-1, 0, 0);

var Ai = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.k = e, this.Jt = n, this.referenceDelegate = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.Yt = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user - The user for which to create a mutation queue.
     * @param serializer - The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.Xt = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return G("" !== e.uid), new t(e.isAuthenticated() ? e.uid : "", n, r, i);
    }, t.prototype.checkEmpty = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ni(t).jt({
            index: Dr.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.addMutationBatch = function(t, e, n, r) {
        var i = this, o = Ci(t), s = Ni(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(a) {
            G("number" == typeof a);
            for (var u = new ni(a, e, n, r), c = function(t, e, n) {
                var r = n.baseMutations.map((function(e) {
                    return or(t.Gt, e);
                })), i = n.mutations.map((function(e) {
                    return or(t.Gt, e);
                }));
                return new Dr(e, n.batchId, n.localWriteTime.toMillis(), r, i);
            }(i.k, i.userId, u), h = [], f = new In((function(t, e) {
                return ut(t.canonicalString(), e.canonicalString());
            })), l = 0, d = r; l < d.length; l++) {
                var p = d[l], y = Nr.key(i.userId, p.key.path, a);
                f = f.add(p.key.path.popLast()), h.push(s.put(c)), h.push(o.put(y, Nr.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                h.push(i.Jt.addToCollectionParentIndex(t, e));
            })), t.addOnCommittedListener((function() {
                i.Yt[a] = u.keys();
            })), Gr.waitFor(h).next((function() {
                return u;
            }));
        }));
    }, t.prototype.lookupMutationBatch = function(t, e) {
        var n = this;
        return Ni(t).get(e).next((function(t) {
            return t ? (G(t.userId === n.userId), li(n.k, t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Zt = function(t, e) {
        var n = this;
        return this.Yt[e] ? Gr.resolve(this.Yt[e]) : this.lookupMutationBatch(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.Yt[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return Ni(t).jt({
            index: Dr.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (G(e.batchId >= r), o = li(n.k, e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.getHighestUnacknowledgedBatchId = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return Ni(t).jt({
            index: Dr.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.getAllMutationBatches = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ni(t).Bt(Dr.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return li(e.k, t);
            }));
        }));
    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, e) {
        var n = this, r = Nr.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return Ci(t).jt({
            range: i
        }, (function(r, i, s) {
            var a = r[0], u = r[1], c = r[2], h = Sr(u);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (a === n.userId && e.path.isEqual(h)) 
            // Look up the mutation batch in the store.
            return Ni(t).get(c).next((function(t) {
                if (!t) throw K();
                G(t.userId === n.userId), o.push(li(n.k, t));
            }));
            s.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) {
        var n = this, r = new In(ut), i = [];
        return e.forEach((function(e) {
            var o = Nr.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), a = Ci(t).jt({
                range: s
            }, (function(t, i, o) {
                var s = t[0], a = t[1], u = t[2], c = Sr(a);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === n.userId && e.path.isEqual(c) ? r = r.add(u) : o.done();
            }));
            i.push(a);
        })), Gr.waitFor(i).next((function() {
            return n.te(t, r);
        }));
    }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = Nr.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), a = new In(ut);
        return Ci(t).jt({
            range: s
        }, (function(t, e, o) {
            var s = t[0], u = t[1], c = t[2], h = Sr(u);
            s === n.userId && r.isPrefixOf(h) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (a = a.add(c)) : o.done();
        })).next((function() {
            return n.te(t, a);
        }));
    }, t.prototype.te = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(Ni(t).get(e).next((function(t) {
                if (null === t) throw K();
                G(t.userId === n.userId), r.push(li(n.k, t));
            })));
        })), Gr.waitFor(i).next((function() {
            return r;
        }));
    }, t.prototype.removeMutationBatch = function(t, e) {
        var n = this;
        return _i(t.Wt, this.userId, e).next((function(r) {
            return t.addOnCommittedListener((function() {
                n.ee(e.batchId);
            })), Gr.forEach(r, (function(e) {
                return n.referenceDelegate.markPotentiallyOrphaned(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.ee = function(t) {
        delete this.Yt[t];
    }, t.prototype.performConsistencyCheck = function(t) {
        var e = this;
        return this.checkEmpty(t).next((function(n) {
            if (!n) return Gr.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(Nr.prefixForUser(e.userId)), i = [];
            return Ci(t).jt({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = Sr(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                G(0 === i.length);
            }));
        }));
    }, t.prototype.containsKey = function(t, e) {
        return Di(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.ne = function(t) {
        var e = this;
        return xi(t).get(this.userId).next((function(t) {
            return t || new Ar(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @returns true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function Di(t, e, n) {
    var r = Nr.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
    return Ci(t).jt({
        range: o,
        Kt: !0
    }, (function(t, n, r) {
        var o = t[0], a = t[1];
 /*batchID*/        t[2], o === e && a === i && (s = !0), 
        r.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Ni(t) {
    return ei(t, Dr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ci(t) {
    return ei(t, Nr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function xi(t) {
    return ei(t, Ar.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ var Ri = /** @class */ function() {
    function t(t) {
        this.se = t;
    }
    return t.prototype.next = function() {
        return this.se += 2, this.se;
    }, t.ie = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.re = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), Li = /** @class */ function() {
    function t(t, e) {
        this.referenceDelegate = t, this.k = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.allocateTargetId = function(t) {
        var e = this;
        return this.oe(t).next((function(n) {
            var r = new Ri(n.highestTargetId);
            return n.highestTargetId = r.next(), e.ae(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.getLastRemoteSnapshotVersion = function(t) {
        return this.oe(t).next((function(t) {
            return lt.fromTimestamp(new ft(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.getHighestSequenceNumber = function(t) {
        return this.oe(t).next((function(t) {
            return t.highestListenSequenceNumber;
        }));
    }, t.prototype.setTargetsMetadata = function(t, e, n) {
        var r = this;
        return this.oe(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.ae(t, i);
        }));
    }, t.prototype.addTargetData = function(t, e) {
        var n = this;
        return this.ce(t, e).next((function() {
            return n.oe(t).next((function(r) {
                return r.targetCount += 1, n.ue(e, r), n.ae(t, r);
            }));
        }));
    }, t.prototype.updateTargetData = function(t, e) {
        return this.ce(t, e);
    }, t.prototype.removeTargetData = function(t, e) {
        var n = this;
        return this.removeMatchingKeysForTargetId(t, e.targetId).next((function() {
            return Oi(t).delete(e.targetId);
        })).next((function() {
            return n.oe(t);
        })).next((function(e) {
            return G(e.targetCount > 0), e.targetCount -= 1, n.ae(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.removeTargets = function(t, e, n) {
        var r = this, i = 0, o = [];
        return Oi(t).jt((function(s, a) {
            var u = di(a);
            u.sequenceNumber <= e && null === n.get(u.targetId) && (i++, o.push(r.removeTargetData(t, u)));
        })).next((function() {
            return Gr.waitFor(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.forEachTarget = function(t, e) {
        return Oi(t).jt((function(t, n) {
            var r = di(n);
            e(r);
        }));
    }, t.prototype.oe = function(t) {
        return Pi(t).get(Fr.key).next((function(t) {
            return G(null !== t), t;
        }));
    }, t.prototype.ae = function(t, e) {
        return Pi(t).put(Fr.key, e);
    }, t.prototype.ce = function(t, e) {
        return Oi(t).put(pi(this.k, e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.ue = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.getTargetCount = function(t) {
        return this.oe(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.getTargetData = function(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = $t(e), r = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]), i = null;
        return Oi(t).jt({
            range: r,
            index: Or.queryTargetsIndexName
        }, (function(t, n, r) {
            var o = di(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        te(e, o.target) && (i = o, r.done());
        })).next((function() {
            return i;
        }));
    }, t.prototype.addMatchingKeys = function(t, e, n) {
        var r = this, i = [], o = Fi(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var s = Ir(e.path);
            i.push(o.put(new Pr(n, s))), i.push(r.referenceDelegate.addReference(t, n, e));
        })), Gr.waitFor(i);
    }, t.prototype.removeMatchingKeys = function(t, e, n) {
        var r = this, i = Fi(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return Gr.forEach(e, (function(e) {
            var o = Ir(e.path);
            return Gr.waitFor([ i.delete([ n, o ]), r.referenceDelegate.removeReference(t, n, e) ]);
        }));
    }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
        var n = Fi(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = Fi(t), i = Cn();
        return r.jt({
            range: n,
            Kt: !0
        }, (function(t, e, n) {
            var r = Sr(t[1]), o = new Lt(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.containsKey = function(t, e) {
        var n = Ir(e.path), r = IDBKeyRange.bound([ n ], [ ht(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return Fi(t).jt({
            index: Pr.documentTargetsIndex,
            Kt: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            t[1], 
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId - The target ID of the TargetData entry to look up.
     * @returns The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Et = function(t, e) {
        return Oi(t).get(e).next((function(t) {
            return t ? di(t) : null;
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function Oi(t) {
    return ei(t, Or.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function Pi(t) {
    return ei(t, Fr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function Fi(t) {
    return ei(t, Pr.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ function Mi(t) {
    return n(this, void 0, void 0, (function() {
        return r(this, (function(e) {
            if (t.code !== W.FAILED_PRECONDITION || t.message !== jr) throw t;
            return q("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vi(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], s = ut(n, i);
    return 0 === s ? ut(r, o) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var qi = /** @class */ function() {
    function t(t) {
        this.he = t, this.buffer = new In(Vi), this.le = 0;
    }
    return t.prototype.fe = function() {
        return ++this.le;
    }, t.prototype.de = function(t) {
        var e = [ t, this.fe() ];
        if (this.buffer.size < this.he) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            Vi(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Ui = /** @class */ function() {
    function t(t, e) {
        this.garbageCollector = t, this.asyncQueue = e, this.we = !1, this._e = null;
    }
    return t.prototype.start = function(t) {
        -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.me(t);
    }, t.prototype.stop = function() {
        this._e && (this._e.cancel(), this._e = null);
    }, Object.defineProperty(t.prototype, "started", {
        get: function() {
            return null !== this._e;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.me = function(t) {
        var e = this, i = this.we ? 3e5 : 6e4;
        q("LruGarbageCollector", "Garbage collection scheduled in " + i + "ms"), this._e = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection" /* LruGarbageCollection */ , i, (function() {
            return n(e, void 0, void 0, (function() {
                var e;
                return r(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        this._e = null, this.we = !0, n.label = 1;

                      case 1:
                        return n.trys.push([ 1, 3, , 7 ]), [ 4 /*yield*/ , t.collectGarbage(this.garbageCollector) ];

                      case 2:
                        return n.sent(), [ 3 /*break*/ , 7 ];

                      case 3:
                        return Yr(e = n.sent()) ? (q("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), 
                        [ 3 /*break*/ , 6 ]) : [ 3 /*break*/ , 4 ];

                      case 4:
                        return [ 4 /*yield*/ , Mi(e) ];

                      case 5:
                        n.sent(), n.label = 6;

                      case 6:
                        return [ 3 /*break*/ , 7 ];

                      case 7:
                        return [ 4 /*yield*/ , this.me(t) ];

                      case 8:
                        return n.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t;
}(), Bi = /** @class */ function() {
    function t(t, e) {
        this.ge = t, this.params = e;
    }
    return t.prototype.calculateTargetCount = function(t, e) {
        return this.ge.ye(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, t.prototype.nthSequenceNumber = function(t, e) {
        var n = this;
        if (0 === e) return Gr.resolve(ot.I);
        var r = new qi(e);
        return this.ge.forEachTarget(t, (function(t) {
            return r.de(t.sequenceNumber);
        })).next((function() {
            return n.ge.pe(t, (function(t) {
                return r.de(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, t.prototype.removeTargets = function(t, e, n) {
        return this.ge.removeTargets(t, e, n);
    }, t.prototype.removeOrphanedDocuments = function(t, e) {
        return this.ge.removeOrphanedDocuments(t, e);
    }, t.prototype.collect = function(t, e) {
        var n = this;
        return -1 === this.params.cacheSizeCollectionThreshold ? (q("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        Gr.resolve(Ei)) : this.getCacheSize(t).next((function(r) {
            return r < n.params.cacheSizeCollectionThreshold ? (q("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.cacheSizeCollectionThreshold), 
            Ei) : n.Te(t, e);
        }));
    }, t.prototype.getCacheSize = function(t) {
        return this.ge.getCacheSize(t);
    }, t.prototype.Te = function(t, e) {
        var n, r, i, o, s, a, u, c = this, h = Date.now();
        return this.calculateTargetCount(t, this.params.percentileToCollect).next((function(e) {
            // Cap at the configured max
            return e > c.params.maximumSequenceNumbersToCollect ? (q("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.params.maximumSequenceNumbersToCollect + " from " + e), 
            r = c.params.maximumSequenceNumbersToCollect) : r = e, o = Date.now(), c.nthSequenceNumber(t, r);
        })).next((function(r) {
            return n = r, s = Date.now(), c.removeTargets(t, n, e);
        })).next((function(e) {
            return i = e, a = Date.now(), c.removeOrphanedDocuments(t, n);
        })).next((function(t) {
            return u = Date.now(), M() <= f.DEBUG && q("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (o - h) + "ms\n\tDetermined least recently used " + r + " in " + (s - o) + "ms\n\tRemoved " + i + " targets in " + (a - s) + "ms\n\tRemoved " + t + " documents in " + (u - a) + "ms\nTotal Duration: " + (u - h) + "ms"), 
            Gr.resolve({
                didRun: !0,
                sequenceNumbersCollected: r,
                targetsRemoved: i,
                documentsRemoved: t
            });
        }));
    }, t;
}(), ji = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.garbageCollector = function(t, e) {
            return new Bi(t, e);
        }(this, e);
    }
    return t.prototype.ye = function(t) {
        var e = this.Ee(t);
        return this.db.getTargetCache().getTargetCount(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.Ee = function(t) {
        var e = 0;
        return this.pe(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.forEachTarget = function(t, e) {
        return this.db.getTargetCache().forEachTarget(t, e);
    }, t.prototype.pe = function(t, e) {
        return this.Ie(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.addReference = function(t, e, n) {
        return Ki(t, n);
    }, t.prototype.removeReference = function(t, e, n) {
        return Ki(t, n);
    }, t.prototype.removeTargets = function(t, e, n) {
        return this.db.getTargetCache().removeTargets(t, e, n);
    }, t.prototype.markPotentiallyOrphaned = function(t, e) {
        return Ki(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Ae = function(t, e) {
        return function(t, e) {
            var n = !1;
            return xi(t).Qt((function(r) {
                return Di(t, r, e).next((function(t) {
                    return t && (n = !0), Gr.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.removeOrphanedDocuments = function(t, e) {
        var n = this, r = this.db.getRemoteDocumentCache().newChangeBuffer(), i = [], o = 0;
        return this.Ie(t, (function(s, a) {
            if (a <= e) {
                var u = n.Ae(t, s).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.getEntry(t, s).next((function() {
                        return r.removeEntry(s), Fi(t).delete([ 0, Ir(s.path) ]);
                    }));
                }));
                i.push(u);
            }
        })).next((function() {
            return Gr.waitFor(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.withSequenceNumber(t.currentSequenceNumber);
        return this.db.getTargetCache().updateTargetData(t, n);
    }, t.prototype.updateLimboDocument = function(t, e) {
        return Ki(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.Ie = function(t, e) {
        var n, r = Fi(t), i = ot.I;
        return r.jt({
            index: Pr.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0];
            t[1];
            var s = r.path, a = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== ot.I && e(new Lt(Sr(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = a, n = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = ot.I;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== ot.I && e(new Lt(Sr(n)), i);
        }));
    }, t.prototype.getCacheSize = function(t) {
        return this.db.getRemoteDocumentCache().getSize(t);
    }, t;
}();

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */ function Ki(t, e) {
    return Fi(t).put(
    /**
 * @returns A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new Pr(0, Ir(t.path), e);
    }(e, t.currentSequenceNumber));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ var Gi = /** @class */ function() {
    function t(t, e) {
        this.mapKeyFn = t, this.equalsFn = e, 
        /**
             * The inner map for a key/value pair. Due to the possibility of collisions we
             * keep a list of entries that we do a linear search through to find an actual
             * match. Note that collisions should be rare, so we still expect near
             * constant time lookups in practice.
             */
        this.inner = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], a = o[1];
            if (this.equalsFn(s, t)) return a;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.mapKeyFn(t), r = this.inner[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.equalsFn(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.inner[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        pt(this.inner, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], a = o[1];
                t(s, a);
            }
        }));
    }, t.prototype.isEmpty = function() {
        return yt(this.inner);
    }, t;
}(), zi = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.changes = new Gi((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.changesApplied = !1;
    }
    return t.prototype.getReadTime = function(t) {
        var e = this.changes.get(t);
        return e ? e.readTime : lt.min();
    }, 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.addEntry = function(t, e) {
        this.assertNotApplied(), this.changes.set(t.key, {
            document: t,
            readTime: e
        });
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.removeEntry = function(t, e) {
        void 0 === e && (e = null), this.assertNotApplied(), this.changes.set(t, {
            document: Jt.newInvalidDocument(t),
            readTime: e
        });
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */
    t.prototype.getEntry = function(t, e) {
        this.assertNotApplied();
        var n = this.changes.get(e);
        return void 0 !== n ? Gr.resolve(n.document) : this.getFromCache(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */
    t.prototype.getEntries = function(t, e) {
        return this.getAllFromCache(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.assertNotApplied = function() {}, 
    t;
}(), Qi = /** @class */ function() {
    /**
     * @param serializer - The document serializer.
     * @param indexManager - The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.k = t, this.Jt = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.addEntry = function(t, e, n) {
        return Yi(t).put(Ji(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.removeEntry = function(t, e) {
        var n = Yi(t), r = Ji(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.Re(t, r);
        }));
    }, t.prototype.getEntry = function(t, e) {
        var n = this;
        return Yi(t).get(Ji(e)).next((function(t) {
            return n.Pe(e, t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document entry and its size.
     */
    t.prototype.be = function(t, e) {
        var n = this;
        return Yi(t).get(Ji(e)).next((function(t) {
            return {
                document: n.Pe(e, t),
                size: ki(t)
            };
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Sn();
        return this.ve(t, e, (function(t, e) {
            var i = n.Pe(t, e);
            r = r.insert(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys - The set of keys entries to look up.
     * @returns A map of documents indexed by key and a map of sizes indexed by
     *     key (zero if the document does not exist).
     */
    t.prototype.Ve = function(t, e) {
        var n = this, r = Sn(), i = new gn(Lt.comparator);
        return this.ve(t, e, (function(t, e) {
            var o = n.Pe(t, e);
            r = r.insert(t, o), i = i.insert(t, ki(e));
        })).next((function() {
            return {
                documents: r,
                Se: i
            };
        }));
    }, t.prototype.ve = function(t, e, n) {
        if (e.isEmpty()) return Gr.resolve();
        var r = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()), i = e.getIterator(), o = i.getNext();
        return Yi(t).jt({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var s = Lt.fromSegments(t); o && Lt.comparator(o, s) < 0; ) n(o, null), o = i.getNext();
            o && o.isEqual(s) && (
            // Key found in cache.
            n(o, e), o = i.hasNext() ? i.getNext() : null), 
            // Skip to the next key (if there is one).
            o ? r.Lt(o.path.toArray()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.hasNext() ? i.getNext() : null;
        }));
    }, t.prototype.getDocumentsMatchingQuery = function(t, e, n) {
        var r = this, i = Sn(), o = e.path.length + 1, s = {};
        if (n.isEqual(lt.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var a = e.path.toArray();
            s.range = IDBKeyRange.lowerBound(a);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var u = e.path.toArray(), c = ui(n);
            s.range = IDBKeyRange.lowerBound([ u, c ], 
            /* open= */ !0), s.index = Rr.collectionReadTimeIndex;
        }
        return Yi(t).jt(s, (function(t, n, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var a = si(r.k, n);
                e.path.isPrefixOf(a.key.path) ? xe(e, a) && (i = i.insert(a.key, a)) : s.done();
            }
        })).next((function() {
            return i;
        }));
    }, t.prototype.newChangeBuffer = function(t) {
        return new Wi(this, !!t && t.trackRemovals);
    }, t.prototype.getSize = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Hi(t).get(Lr.key).next((function(t) {
            return G(!!t), t;
        }));
    }, t.prototype.Re = function(t, e) {
        return Hi(t).put(Lr.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.Pe = function(t, e) {
        if (e) {
            var n = si(this.k, e);
            // Whether the document is a sentinel removal and should only be used in the
            // `getNewDocumentChanges()`
                        if (!n.isNoDocument() || !n.version.isEqual(lt.min())) return n;
        }
        return Jt.newInvalidDocument(t);
    }, t;
}(), Wi = /** @class */ function(e) {
    /**
     * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).De = t, r.trackRemovals = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r.Ce = new Gi((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), r;
    }
    return t(n, e), n.prototype.applyChanges = function(t) {
        var e = this, n = [], r = 0, i = new In((function(t, e) {
            return ut(t.canonicalString(), e.canonicalString());
        }));
        return this.changes.forEach((function(o, s) {
            var a = e.Ce.get(o);
            if (s.document.isValidDocument()) {
                var u = ai(e.De.k, s.document, e.getReadTime(o));
                i = i.add(o.path.popLast());
                var c = ki(u);
                r += c - a, n.push(e.De.addEntry(t, o, u));
            } else if (r -= a, e.trackRemovals) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var h = ai(e.De.k, Jt.newNoDocument(o, lt.min()), e.getReadTime(o));
                n.push(e.De.addEntry(t, o, h));
            } else n.push(e.De.removeEntry(t, o));
        })), i.forEach((function(r) {
            n.push(e.De.Jt.addToCollectionParentIndex(t, r));
        })), n.push(this.De.updateMetadata(t, r)), Gr.waitFor(n);
    }, n.prototype.getFromCache = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.De.be(t, e).next((function(t) {
            return n.Ce.set(e, t.size), t.document;
        }));
    }, n.prototype.getAllFromCache = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.De.Ve(t, e).next((function(t) {
            var e = t.documents;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `MutableDocumentMap` directly, without a conversion.
            return t.Se.forEach((function(t, e) {
                n.Ce.set(t, e);
            })), e;
        }));
    }, n;
}(zi);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ function Hi(t) {
    return ei(t, Lr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function Yi(t) {
    return ei(t, Rr.store);
}

function Ji(t) {
    return t.path.toArray();
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Performs database creation and schema upgrades. */ var Xi = /** @class */ function() {
    function t(t) {
        this.k = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.Nt = function(t, e, n, r) {
        var i = this;
        G(n < r && n >= 0 && r <= 11);
        var o = new zr("createOrUpgrade", e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(kr.store);
        }(t), function(t) {
            t.createObjectStore(Ar.store, {
                keyPath: Ar.keyPath
            }), t.createObjectStore(Dr.store, {
                keyPath: Dr.keyPath,
                autoIncrement: !0
            }).createIndex(Dr.userMutationsIndex, Dr.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(Nr.store);
        }(t), Zi(t), function(t) {
            t.createObjectStore(Rr.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var s = Gr.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(Pr.store), t.deleteObjectStore(Or.store), t.deleteObjectStore(Fr.store);
        }(t), Zi(t)), s = s.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param txn - The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(Fr.store), n = new Fr(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, lt.min().toTimestamp(), 
                /*targetCount=*/ 0);
                return e.put(Fr.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, e) {
                return e.store(Dr.store).Bt().next((function(n) {
                    t.deleteObjectStore(Dr.store), t.createObjectStore(Dr.store, {
                        keyPath: Dr.keyPath,
                        autoIncrement: !0
                    }).createIndex(Dr.userMutationsIndex, Dr.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(Dr.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return Gr.waitFor(i);
                }));
            }(t, o);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(Vr.store, {
                    keyPath: Vr.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (s = s.next((function() {
            return i.Ne(o);
        }))), n < 6 && r >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(Lr.store);
            }(t), i.ke(o);
        }))), n < 7 && r >= 7 && (s = s.next((function() {
            return i.xe(o);
        }))), n < 8 && r >= 8 && (s = s.next((function() {
            return i.$e(t, o);
        }))), n < 9 && r >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(Rr.store);
                e.createIndex(Rr.readTimeIndex, Rr.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Rr.collectionReadTimeIndex, Rr.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (s = s.next((function() {
            return i.Fe(o);
        }))), n < 11 && r >= 11 && (s = s.next((function() {
            !function(t) {
                t.createObjectStore(qr.store, {
                    keyPath: qr.keyPath
                });
            }(t), function(t) {
                t.createObjectStore(Ur.store, {
                    keyPath: Ur.keyPath
                });
            }(t);
        }))), s;
    }, t.prototype.ke = function(t) {
        var e = 0;
        return t.store(Rr.store).jt((function(t, n) {
            e += ki(n);
        })).next((function() {
            var n = new Lr(e);
            return t.store(Lr.store).put(Lr.key, n);
        }));
    }, t.prototype.Ne = function(t) {
        var e = this, n = t.store(Ar.store), r = t.store(Dr.store);
        return n.Bt().next((function(n) {
            return Gr.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.Bt(Dr.userMutationsIndex, i).next((function(r) {
                    return Gr.forEach(r, (function(r) {
                        G(r.userId === n.userId);
                        var i = li(e.k, r);
                        return _i(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.xe = function(t) {
        var e = t.store(Pr.store), n = t.store(Rr.store);
        return t.store(Fr.store).get(Fr.key).next((function(t) {
            var r = [];
            return n.jt((function(n, i) {
                var o = new mt(n), s = function(t) {
                    return [ 0, Ir(t) ];
                }(o);
                r.push(e.get(s).next((function(n) {
                    return n ? Gr.resolve() : function(n) {
                        return e.put(new Pr(0, Ir(n), t.highestListenSequenceNumber));
                    }(o);
                })));
            })).next((function() {
                return Gr.waitFor(r);
            }));
        }));
    }, t.prototype.$e = function(t, e) {
        // Create the index.
        t.createObjectStore(Mr.store, {
            keyPath: Mr.keyPath
        });
        var n = e.store(Mr.store), r = new bi, i = function(t) {
            if (r.add(t)) {
                var e = t.lastSegment(), i = t.popLast();
                return n.put({
                    collectionId: e,
                    parent: Ir(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(Rr.store).jt({
            Kt: !0
        }, (function(t, e) {
            var n = new mt(t);
            return i(n.popLast());
        })).next((function() {
            return e.store(Nr.store).jt({
                Kt: !0
            }, (function(t, e) {
                t[0];
                var n = t[1];
                t[2];
                var r = Sr(n);
                return i(r.popLast());
            }));
        }));
    }, t.prototype.Fe = function(t) {
        var e = this, n = t.store(Or.store);
        return n.jt((function(t, r) {
            var i = di(r), o = pi(e.k, i);
            return n.put(o);
        }));
    }, t;
}();

function Zi(t) {
    t.createObjectStore(Pr.store, {
        keyPath: Pr.keyPath
    }).createIndex(Pr.documentTargetsIndex, Pr.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Or.store, {
        keyPath: Or.keyPath
    }).createIndex(Or.queryTargetsIndexName, Or.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Fr.store);
}

var $i = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", to = /** @class */ function() {
    function t(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    e, n, r, i, o, s, a, u, c, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    h) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, 
        this.Oe = o, this.window = s, this.document = a, this.Me = c, this.Le = h, this.Be = null, 
        this.Ue = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.qe = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.Ke = null, 
        /** The client metadata refresh task. */
        this.je = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.Qe = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.We = function(t) {
            return Promise.resolve();
        }, !t.bt()) throw new H(W.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.referenceDelegate = new ji(this, i), this.Ge = n + "main", this.k = new oi(u), 
        this.ze = new Qr(this.Ge, 11, new Xi(this.k)), this.He = new Li(this.referenceDelegate, this.k), 
        this.Jt = new Ii, this.Je = function(t, e) {
            return new Qi(t, e);
        }(this.k, this.Jt), this.Ye = new vi, this.window && this.window.localStorage ? this.Xe = this.window.localStorage : (this.Xe = null, 
        !1 === h && U("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @returns Whether persistence was enabled.
     */    return t.prototype.start = function() {
        var t = this;
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
                return this.Ze().then((function() {
            if (!t.isPrimary && !t.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new H(W.FAILED_PRECONDITION, $i);
            return t.tn(), t.en(), t.nn(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                return t.He.getHighestSequenceNumber(e);
            }));
        })).then((function(e) {
            t.Be = new ot(e, t.Me);
        })).then((function() {
            t.Ue = !0;
        })).catch((function(e) {
            return t.ze && t.ze.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.sn = function(t) {
        var e = this;
        return this.We = function(i) {
            return n(e, void 0, void 0, (function() {
                return r(this, (function(e) {
                    return this.started ? [ 2 /*return*/ , t(i) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.setDatabaseDeletedListener = function(t) {
        var e = this;
        this.ze.xt((function(i) {
            return n(e, void 0, void 0, (function() {
                return r(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return null === i.newVersion ? [ 4 /*yield*/ , t() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.setNetworkEnabled = function(t) {
        var e = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Oe.enqueueAndForget((function() {
            return n(e, void 0, void 0, (function() {
                return r(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.started ? [ 4 /*yield*/ , this.Ze() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.Ze = function() {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
            return no(e).put(new Vr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.rn(e).next((function(e) {
                    e || (t.isPrimary = !1, t.Oe.enqueueRetryable((function() {
                        return t.We(!1);
                    })));
                }));
            })).next((function() {
                return t.on(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.an(e).next((function() {
                    return !1;
                })) : !!n && t.cn(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (Yr(e)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return q("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return q("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t.Oe.enqueueRetryable((function() {
                return t.We(e);
            })), t.isPrimary = e;
        }));
    }, t.prototype.rn = function(t) {
        var e = this;
        return eo(t).get(kr.key).next((function(t) {
            return Gr.resolve(e.un(t));
        }));
    }, t.prototype.hn = function(t) {
        return no(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.ln = function() {
        return n(this, void 0, void 0, (function() {
            var t, e, n, i, o = this;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return !this.isPrimary || this.fn(this.Qe, 18e5) ? [ 3 /*break*/ , 2 ] : (this.Qe = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(t) {
                        var e = ei(t, Vr.store);
                        return e.Bt().next((function(t) {
                            var n = o.dn(t, 18e5), r = t.filter((function(t) {
                                return -1 === n.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return Gr.forEach(r, (function(t) {
                                return e.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    if (t = r.sent(), this.Xe) for (e = 0, n = t; e < n.length; e++) i = n[e], this.Xe.removeItem(this.wn(i.clientId));
                    r.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.nn = function() {
        var t = this;
        this.je = this.Oe.enqueueAfterDelay("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.Ze().then((function() {
                return t.ln();
            })).then((function() {
                return t.nn();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ t.prototype.un = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.on = function(t) {
        var e = this;
        return this.Le ? Gr.resolve(!0) : eo(t).get(kr.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.fn(n.leaseTimestampMs, 5e3) && !e._n(n.ownerId)) {
                if (e.un(n) && e.networkEnabled) return !0;
                if (!e.un(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new H(W.FAILED_PRECONDITION, $i);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || no(t).Bt().next((function(t) {
                return void 0 === e.dn(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && q("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.shutdown = function() {
        return n(this, void 0, void 0, (function() {
            var t = this;
            return r(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.Ue = !1, this.mn(), this.je && (this.je.cancel(), this.je = null), this.gn(), 
                    this.yn(), [ 4 /*yield*/ , this.ze.runTransaction("shutdown", "readwrite", [ kr.store, Vr.store ], (function(e) {
                        var n = new ti(e, ot.I);
                        return t.an(n).next((function() {
                            return t.hn(n);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    return e.sent(), this.ze.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.pn(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.dn = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.fn(t.updateTimeMs, e) && !n._n(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Tn = function() {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", (function(e) {
            return no(e).Bt().next((function(e) {
                return t.dn(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, Object.defineProperty(t.prototype, "started", {
        get: function() {
            return this.Ue;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.getMutationQueue = function(t) {
        return Ai.Xt(t, this.k, this.Jt, this.referenceDelegate);
    }, t.prototype.getTargetCache = function() {
        return this.He;
    }, t.prototype.getRemoteDocumentCache = function() {
        return this.Je;
    }, t.prototype.getIndexManager = function() {
        return this.Jt;
    }, t.prototype.getBundleCache = function() {
        return this.Ye;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        q("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.ze.runTransaction(t, o, Br, (function(o) {
            return i = new ti(o, r.Be ? r.Be.next() : ot.I), "readwrite-primary" === e ? r.rn(i).next((function(t) {
                return !!t || r.on(i);
            })).next((function(e) {
                if (!e) throw U("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r.Oe.enqueueRetryable((function() {
                    return r.We(!1);
                })), new H(W.FAILED_PRECONDITION, jr);
                return n(i);
            })).next((function(t) {
                return r.cn(i).next((function() {
                    return t;
                }));
            })) : r.En(i).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.raiseOnCommittedEvent(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.En = function(t) {
        var e = this;
        return eo(t).get(kr.key).next((function(t) {
            if (null !== t && e.fn(t.leaseTimestampMs, 5e3) && !e._n(t.ownerId) && !e.un(t) && !(e.Le || e.allowTabSynchronization && t.allowTabSynchronization)) throw new H(W.FAILED_PRECONDITION, $i);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.cn = function(t) {
        var e = new kr(this.clientId, this.allowTabSynchronization, Date.now());
        return eo(t).put(kr.key, e);
    }, t.bt = function() {
        return Qr.bt();
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ t.prototype.an = function(t) {
        var e = this, n = eo(t);
        return n.get(kr.key).next((function(t) {
            return e.un(t) ? (q("IndexedDbPersistence", "Releasing primary lease."), n.delete(kr.key)) : Gr.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ t.prototype.fn = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (U("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, t.prototype.tn = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Ke = function() {
            t.Oe.enqueueAndForget((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.Ze();
            }));
        }, this.document.addEventListener("visibilitychange", this.Ke), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.gn = function() {
        this.Ke && (this.document.removeEventListener("visibilitychange", this.Ke), this.Ke = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.en = function() {
        var t, e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.qe = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.mn(), d() && navigator.appVersion.match(/Version\/1[45]/) && 
            // On Safari 14 and 15, we do not run any cleanup actions as it might
            // trigger a bug that prevents Safari from re-opening IndexedDB during
            // the next page load.
            // See https://bugs.webkit.org/show_bug.cgi?id=226547
            e.Oe.enterRestrictedMode(/* purgeExistingTasks= */ !0), e.Oe.enqueueAndForget((function() {
                return e.shutdown();
            }));
        }, this.window.addEventListener("pagehide", this.qe));
    }, t.prototype.yn = function() {
        this.qe && (this.window.removeEventListener("pagehide", this.qe), this.qe = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype._n = function(t) {
        var e;
        try {
            var n = null !== (null === (e = this.Xe) || void 0 === e ? void 0 : e.getItem(this.wn(t)));
            return q("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return U("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.mn = function() {
        if (this.Xe) try {
            this.Xe.setItem(this.wn(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            U("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ t.prototype.pn = function() {
        if (this.Xe) try {
            this.Xe.removeItem(this.wn(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.wn = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, t;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the “primary client”. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function eo(t) {
    return ei(t, kr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function no(t) {
    return ei(t, Vr.store);
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function ro(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    var n = t.projectId;
    return t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;
}

var io = function(t, e) {
    this.progress = t, this.In = e;
}, oo = /** @class */ function() {
    function t(t, e, n) {
        this.Je = t, this.An = e, this.Jt = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Rn = function(t, e) {
        var n = this;
        return this.An.getAllMutationBatchesAffectingDocumentKey(t, e).next((function(r) {
            return n.Pn(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Pn = function(t, e, n) {
        return this.Je.getEntry(t, e).next((function(t) {
            for (var e = 0, r = n; e < r.length; e++) {
                r[e].applyToLocalView(t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.bn = function(t, e) {
        t.forEach((function(t, n) {
            for (var r = 0, i = e; r < i.length; r++) {
                i[r].applyToLocalView(n);
            }
        }));
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.vn = function(t, e) {
        var n = this;
        return this.Je.getEntries(t, e).next((function(e) {
            return n.Vn(t, e).next((function() {
                return e;
            }));
        }));
    }, 
    /**
     * Applies the local view the given `baseDocs` without retrieving documents
     * from the local store.
     */
    t.prototype.Vn = function(t, e) {
        var n = this;
        return this.An.getAllMutationBatchesAffectingDocumentKeys(t, e).next((function(t) {
            return n.bn(e, t);
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.getDocumentsMatchingQuery = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return Lt.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Sn(t, e.path) : Se(e) ? this.Dn(t, e, n) : this.Cn(t, e, n);
    }, t.prototype.Sn = function(t, e) {
        // Just do a simple document lookup.
        return this.Rn(t, new Lt(e)).next((function(t) {
            var e = kn();
            return t.isFoundDocument() && (e = e.insert(t.key, t)), e;
        }));
    }, t.prototype.Dn = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = kn();
        return this.Jt.getCollectionParents(t, i).next((function(s) {
            return Gr.forEach(s, (function(s) {
                var a = function(t, e) {
                    return new me(e, 
                    /*collectionGroup=*/ null, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
                }(e, s.child(i));
                return r.Cn(t, a, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.insert(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.Cn = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Je.getDocumentsMatchingQuery(t, e, n).next((function(n) {
            return r = n, o.An.getAllMutationBatchesAffectingQuery(t, e);
        })).next((function(e) {
            return i = e, o.Nn(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, a = o.mutations; s < a.length; s++) {
                    var u = a[s], c = u.key, h = r.get(c);
                    null == h && (
                    // Create invalid document to apply mutations on top of
                    h = Jt.newInvalidDocument(c), r = r.insert(c, h)), en(u, h, o.localWriteTime), h.isFoundDocument() || (r = r.remove(c));
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                xe(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Nn = function(t, e, n) {
        for (var r = Cn(), i = 0, o = e; i < o.length; i++) for (var s = 0, a = o[i].mutations; s < a.length; s++) {
            var u = a[s];
            u instanceof an && null === n.get(u.key) && (r = r.add(u.key));
        }
        var c = n;
        return this.Je.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                e.isFoundDocument() && (c = c.insert(t, e));
            })), c;
        }));
    }, t;
}(), so = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.kn = n, this.xn = r;
    }
    return t.$n = function(e, n) {
        for (var r = Cn(), i = Cn(), o = 0, s = n.docChanges; o < s.length; o++) {
            var a = s[o];
            switch (a.type) {
              case 0 /* Added */ :
                r = r.add(a.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(a.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), ao = /** @class */ function() {
    function t() {}
    /** Sets the document view to query against. */    return t.prototype.Fn = function(t) {
        this.On = t;
    }, 
    /** Returns all local documents matching the specified query. */ t.prototype.getDocumentsMatchingQuery = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
        }(e) || n.isEqual(lt.min()) ? this.Mn(t, e) : this.On.vn(t, r).next((function(o) {
            var s = i.Ln(e, o);
            return (be(e) || Ie(e)) && i.Bn(e.limitType, s, r, n) ? i.Mn(t, e) : (M() <= f.DEBUG && q("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), Ce(e)), 
            i.On.getDocumentsMatchingQuery(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return s.forEach((function(e) {
                    t = t.insert(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Ln = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new In(Re(t));
        return e.forEach((function(e, r) {
            xe(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */
    t.prototype.Bn = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
    }, t.prototype.Mn = function(t, e) {
        return M() <= f.DEBUG && q("QueryEngine", "Using full collection scan to execute query:", Ce(e)), 
        this.On.getDocumentsMatchingQuery(t, e, lt.min());
    }, t;
}(), uo = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n, r) {
        this.persistence = t, this.Un = e, this.k = r, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.qn = new gn(ut), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Kn = new Gi((function(t) {
            return $t(t);
        }), te), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.jn = lt.min(), this.An = t.getMutationQueue(n), this.Qn = t.getRemoteDocumentCache(), 
        this.He = t.getTargetCache(), this.Wn = new oo(this.Qn, this.An, this.persistence.getIndexManager()), 
        this.Ye = t.getBundleCache(), this.Un.Fn(this.Wn);
    }
    return t.prototype.collectGarbage = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.collect(n, e.qn);
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ function co(
/** Manages our in-memory or durable persistence. */
t, e, n, r) {
    return new uo(t, e, n, r);
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
function ho(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o, s;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return n = Q(t), i = n.An, o = n.Wn, [ 4 /*yield*/ , n.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                    // Swap out the mutation queue, grabbing the pending mutation batches
                    // before and after.
                    var r;
                    return n.An.getAllMutationBatches(t).next((function(s) {
                        return r = s, i = n.persistence.getMutationQueue(e), 
                        // Recreate our LocalDocumentsView using the new
                        // MutationQueue.
                        o = new oo(n.Qn, i, n.persistence.getIndexManager()), i.getAllMutationBatches(t);
                    })).next((function(e) {
                        for (var n = [], i = [], s = Cn(), a = 0, u = r
                        // Union the old/new changed keys.
                        ; a < u.length; a++) {
                            var c = u[a];
                            n.push(c.batchId);
                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                                var l = f[h];
                                s = s.add(l.key);
                            }
                        }
                        for (var d = 0, p = e; d < p.length; d++) {
                            var y = p[d];
                            i.push(y.batchId);
                            for (var v = 0, m = y.mutations; v < m.length; v++) {
                                var g = m[v];
                                s = s.add(g.key);
                            }
                        }
                        // Return the set of all (potentially) changed documents and the list
                        // of mutation batch IDs that were affected by change.
                                                return o.vn(t, s).next((function(t) {
                            return {
                                Gn: t,
                                removedBatchIds: n,
                                addedBatchIds: i
                            };
                        }));
                    }));
                })) ];

              case 1:
                return s = r.sent(), [ 2 /*return*/ , (n.An = i, n.Wn = o, n.Un.Fn(n.Wn), s) ];
            }
        }));
    }));
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */ function fo(t, e) {
    var n = Q(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.Qn.newChangeBuffer({
            trackRemovals: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), s = Gr.resolve();
            return o.forEach((function(t) {
                s = s.next((function() {
                    return r.getEntry(e, t);
                })).next((function(e) {
                    var o = n.docVersions.get(t);
                    G(null !== o), e.version.compareTo(o) < 0 && (i.applyToRemoteDocument(e, n), e.isValidDocument() && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.addEntry(e, n.commitVersion));
                }));
            })), s.next((function() {
                return t.An.removeMutationBatch(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n.An.performConsistencyCheck(t);
        })).next((function() {
            return n.Wn.vn(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function lo(t) {
    var e = Q(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e.He.getLastRemoteSnapshotVersion(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function po(t, e) {
    var n = Q(t), r = e.snapshotVersion, i = n.qn;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.Qn.newChangeBuffer({
            trackRemovals: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.qn;
        var s = [];
        e.targetChanges.forEach((function(e, o) {
            var a = i.get(o);
            if (a) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                s.push(n.He.removeMatchingKeys(t, e.removedDocuments, o).next((function() {
                    return n.He.addMatchingKeys(t, e.addedDocuments, o);
                })));
                var u = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (u.approximateByteSize() > 0) {
                    var c = a.withResumeToken(u, r).withSequenceNumber(t.currentSequenceNumber);
                    i = i.insert(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return G(e.resumeToken.approximateByteSize() > 0), 0 === t.resumeToken.approximateByteSize() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0);
                    }(a, c, e) && s.push(n.He.updateTargetData(t, c));
                }
            }
        }));
        var a = Sn();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.documentUpdates.forEach((function(r, i) {
            e.resolvedLimboDocuments.has(r) && s.push(n.persistence.referenceDelegate.updateLimboDocument(t, r));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        s.push(yo(t, o, e.documentUpdates, r, void 0).next((function(t) {
            a = t;
        }))), !r.isEqual(lt.min())) {
            var u = n.He.getLastRemoteSnapshotVersion(t).next((function(e) {
                return n.He.setTargetsMetadata(t, t.currentSequenceNumber, r);
            }));
            s.push(u);
        }
        return Gr.waitFor(s).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.Wn.Vn(t, a);
        })).next((function() {
            return a;
        }));
    })).then((function(t) {
        return n.qn = i, t;
    }));
}

/**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */ function yo(t, e, n, r, 
// TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) {
    var o = Cn();
    return n.forEach((function(t) {
        return o = o.add(t);
    })), e.getEntries(t, o).next((function(t) {
        var o = Sn();
        return n.forEach((function(n, s) {
            var a = t.get(n), u = (null == i ? void 0 : i.get(n)) || r;
            // Note: The order of the steps below is important, since we want
            // to ensure that rejected limbo resolutions (which fabricate
            // NoDocuments with SnapshotVersion.min()) never add documents to
            // cache.
                        s.isNoDocument() && s.version.isEqual(lt.min()) ? (
            // NoDocuments with SnapshotVersion.min() are used in manufactured
            // events. We remove these documents from cache since we lost
            // access.
            e.removeEntry(n, u), o = o.insert(n, s)) : !a.isValidDocument() || s.version.compareTo(a.version) > 0 || 0 === s.version.compareTo(a.version) && a.hasPendingWrites ? (e.addEntry(s, u), 
            o = o.insert(n, s)) : q("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", a.version, " Watch version:", s.version);
        })), o;
    }))
    /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */;
}

function vo(t, e) {
    var n = Q(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n.An.getNextMutationBatchAfterBatchId(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */ function mo(t, e) {
    var n = Q(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
        var r;
        return n.He.getTargetData(t, e).next((function(i) {
            return i ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, Gr.resolve(r)) : n.He.allocateTargetId(t).next((function(i) {
                return r = new ii(e, i, 0 /* Listen */ , t.currentSequenceNumber), n.He.addTargetData(t, r).next((function() {
                    return r;
                }));
            }));
        }));
    })).then((function(t) {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        var r = n.qn.get(t.targetId);
        return (null === r || t.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.qn = n.qn.insert(t.targetId, t), 
        n.Kn.set(e, t.targetId)), t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function go(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var n, o, s, a;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                n = Q(t), o = n.qn.get(e), s = i ? "readwrite" : "readwrite-primary", r.label = 1;

              case 1:
                return r.trys.push([ 1, 4, , 5 ]), i ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , n.persistence.runTransaction("Release target", s, (function(t) {
                    return n.persistence.referenceDelegate.removeTarget(t, o);
                })) ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!Yr(a = r.sent())) throw a;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return q("LocalStore", "Failed to update sequence numbers for target " + e + ": " + a), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return n.qn = n.qn.remove(e), n.Kn.delete(o.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function wo(t, e, n) {
    var r = Q(t), i = lt.min(), o = Cn();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        return function(t, e, n) {
            var r = Q(t), i = r.Kn.get(n);
            return void 0 !== i ? Gr.resolve(r.qn.get(i)) : r.He.getTargetData(e, n);
        }(r, t, ke(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.He.getMatchingKeysForTargetId(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r.Un.getDocumentsMatchingQuery(t, e, n ? i : lt.min(), n ? o : Cn());
        })).next((function(t) {
            return {
                documents: t,
                zn: o
            };
        }));
    }));
}

// PORTING NOTE: Multi-Tab only.
function bo(t, e) {
    var n = Q(t), r = Q(n.He), i = n.qn.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
        return r.Et(t, e).next((function(t) {
            return t ? t.target : null;
        }));
    }));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
function Io(t) {
    var e = Q(t);
    return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
        return function(t, e, n) {
            var r = Q(t), i = Sn(), o = ui(n), s = Yi(e), a = IDBKeyRange.lowerBound(o, !0);
            return s.jt({
                index: Rr.readTimeIndex,
                range: a
            }, (function(t, e) {
                // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
                // the documents directly since we want to keep sentinel deletes.
                var n = si(r.k, e);
                i = i.insert(n.key, n), o = e.readTime;
            })).next((function() {
                return {
                    In: i,
                    readTime: ci(o)
                };
            }));
        }(e.Qn, t, e.jn);
    })).then((function(t) {
        var n = t.In, r = t.readTime;
        return e.jn = r, n;
    }));
}

/**
 * Reads the newest document change from persistence and moves the internal
 * synchronization marker forward so that calls to `getNewDocumentChanges()`
 * only return changes that happened after client initialization.
 */
// PORTING NOTE: Multi-Tab only.
function To(t) {
    return n(this, void 0, void 0, (function() {
        var e;
        return r(this, (function(n) {
            return [ 2 /*return*/ , (e = Q(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                return function(t) {
                    var e = Yi(t), n = lt.min();
                    // If there are no existing entries, we return SnapshotVersion.min().
                                        return e.jt({
                        index: Rr.readTimeIndex,
                        reverse: !0
                    }, (function(t, e, r) {
                        e.readTime && (n = ci(e.readTime)), r.done();
                    })).next((function() {
                        return n;
                    }));
                }(t);
            })).then((function(t) {
                e.jn = t;
            })) ];
        }));
    }));
}

/**
 * Creates a new target using the given bundle name, which will be used to
 * hold the keys of all documents from the bundle in query-document mappings.
 * This ensures that the loaded documents do not get garbage collected
 * right away.
 */
/**
 * Applies the documents from a bundle to the "ground-state" (remote)
 * documents.
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function Eo(t, e, i, o) {
    return n(this, void 0, void 0, (function() {
        var n, s, a, u, c, h, f, l, d, p;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                for (n = Q(t), s = Cn(), a = Sn(), u = Dn(), c = 0, h = i; c < h.length; c++) f = h[c], 
                l = e.Hn(f.metadata.name), f.document && (s = s.add(l)), a = a.insert(l, e.Jn(f)), 
                u = u.insert(l, e.Yn(f.metadata.readTime));
                return d = n.Qn.newChangeBuffer({
                    trackRemovals: !0
                }), [ 4 /*yield*/ , mo(n, function(t) {
                    // It is OK that the path used for the query is not valid, because this will
                    // not be read and queried.
                    return ke(we(mt.fromString("__bundle__/docs/" + t)));
                }(o)) ];

              case 1:
                // Allocates a target to hold all document keys from the bundle, such that
                // they will not get garbage collected right away.
                return p = r.sent(), [ 2 /*return*/ , n.persistence.runTransaction("Apply bundle documents", "readwrite", (function(t) {
                    return yo(t, d, a, lt.min(), u).next((function(e) {
                        return d.apply(t), e;
                    })).next((function(e) {
                        return n.He.removeMatchingKeysForTargetId(t, p.targetId).next((function() {
                            return n.He.addMatchingKeys(t, s, p.targetId);
                        })).next((function() {
                            return n.Wn.Vn(t, e);
                        })).next((function() {
                            return e;
                        }));
                    }));
                })) ];
            }
        }));
    }));
}

/**
 * Returns a promise of a boolean to indicate if the given bundle has already
 * been loaded and the create time is newer than the current loading bundle.
 */
/**
 * Saves the given `NamedQuery` to local persistence.
 */ function So(t, e, i) {
    return void 0 === i && (i = Cn()), n(this, void 0, void 0, (function() {
        var n, o;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return [ 4 /*yield*/ , mo(t, ke(yi(e.bundledQuery))) ];

              case 1:
                return n = r.sent(), [ 2 /*return*/ , (o = Q(t)).persistence.runTransaction("Save named query", "readwrite", (function(t) {
                    var r = Hn(e.readTime);
                    // Simply save the query itself if it is older than what the SDK already
                    // has.
                                        if (n.snapshotVersion.compareTo(r) >= 0) return o.Ye.saveNamedQuery(t, e);
                    // Update existing target data because the query from the bundle is newer.
                                        var s = n.withResumeToken(Tt.EMPTY_BYTE_STRING, r);
                    return o.qn = o.qn.insert(s.targetId, s), o.He.updateTargetData(t, s).next((function() {
                        return o.He.removeMatchingKeysForTargetId(t, n.targetId);
                    })).next((function() {
                        return o.He.addMatchingKeys(t, i, n.targetId);
                    })).next((function() {
                        return o.Ye.saveNamedQuery(t, e);
                    }));
                })) ];
            }
        }));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _o = /** @class */ function() {
    function t(t) {
        this.k = t, this.Xn = new Map, this.Zn = new Map;
    }
    return t.prototype.getBundleMetadata = function(t, e) {
        return Gr.resolve(this.Xn.get(e));
    }, t.prototype.saveBundleMetadata = function(t, e) {
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        var n;
        return this.Xn.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: Hn(n.createTime)
        }), Gr.resolve();
    }, t.prototype.getNamedQuery = function(t, e) {
        return Gr.resolve(this.Zn.get(e));
    }, t.prototype.saveNamedQuery = function(t, e) {
        return this.Zn.set(e.name, function(t) {
            return {
                name: t.name,
                query: yi(t.bundledQuery),
                readTime: Hn(t.readTime)
            };
        }(e)), Gr.resolve();
    }, t;
}(), ko = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.ts = new In(Ao.es), 
        // A set of outstanding references to a document sorted by target id.
        this.ns = new In(Ao.ss)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.isEmpty = function() {
        return this.ts.isEmpty();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.addReference = function(t, e) {
        var n = new Ao(t, e);
        this.ts = this.ts.add(n), this.ns = this.ns.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.rs = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.addReference(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.removeReference = function(t, e) {
        this.os(new Ao(t, e));
    }, t.prototype.cs = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.removeReference(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.us = function(t) {
        var e = this, n = new Lt(new mt([])), r = new Ao(n, t), i = new Ao(n, t + 1), o = [];
        return this.ns.forEachInRange([ r, i ], (function(t) {
            e.os(t), o.push(t.key);
        })), o;
    }, t.prototype.hs = function() {
        var t = this;
        this.ts.forEach((function(e) {
            return t.os(e);
        }));
    }, t.prototype.os = function(t) {
        this.ts = this.ts.delete(t), this.ns = this.ns.delete(t);
    }, t.prototype.ls = function(t) {
        var e = new Lt(new mt([])), n = new Ao(e, t), r = new Ao(e, t + 1), i = Cn();
        return this.ns.forEachInRange([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.containsKey = function(t) {
        var e = new Ao(t, 0), n = this.ts.firstAfterOrEqual(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Ao = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.fs = e
        /** Compare by key then by ID */;
    }
    return t.es = function(t, e) {
        return Lt.comparator(t.key, e.key) || ut(t.fs, e.fs);
    }, 
    /** Compare by ID then by key */ t.ss = function(t, e) {
        return ut(t.fs, e.fs) || Lt.comparator(t.key, e.key);
    }, t;
}(), Do = /** @class */ function() {
    function t(t, e) {
        this.Jt = t, this.referenceDelegate = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.An = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.ds = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.ws = new In(Ao.es);
    }
    return t.prototype.checkEmpty = function(t) {
        return Gr.resolve(0 === this.An.length);
    }, t.prototype.addMutationBatch = function(t, e, n, r) {
        var i = this.ds;
        this.ds++, this.An.length > 0 && this.An[this.An.length - 1];
        var o = new ni(i, e, n, r);
        this.An.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, a = r; s < a.length; s++) {
            var u = a[s];
            this.ws = this.ws.add(new Ao(u.key, i)), this.Jt.addToCollectionParentIndex(t, u.key.path.popLast());
        }
        return Gr.resolve(o);
    }, t.prototype.lookupMutationBatch = function(t, e) {
        return Gr.resolve(this._s(e));
    }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
        var n = e + 1, r = this.gs(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Gr.resolve(this.An.length > i ? this.An[i] : null);
    }, t.prototype.getHighestUnacknowledgedBatchId = function() {
        return Gr.resolve(0 === this.An.length ? -1 : this.ds - 1);
    }, t.prototype.getAllMutationBatches = function(t) {
        return Gr.resolve(this.An.slice());
    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, e) {
        var n = this, r = new Ao(e, 0), i = new Ao(e, Number.POSITIVE_INFINITY), o = [];
        return this.ws.forEachInRange([ r, i ], (function(t) {
            var e = n._s(t.fs);
            o.push(e);
        })), Gr.resolve(o);
    }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) {
        var n = this, r = new In(ut);
        return e.forEach((function(t) {
            var e = new Ao(t, 0), i = new Ao(t, Number.POSITIVE_INFINITY);
            n.ws.forEachInRange([ e, i ], (function(t) {
                r = r.add(t.fs);
            }));
        })), Gr.resolve(this.ys(r));
    }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                Lt.isDocumentKey(i) || (i = i.child(""));
        var o = new Ao(new Lt(i), 0), s = new In(ut);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.ws.forEachWhile((function(t) {
            var e = t.key.path;
            return !!n.isPrefixOf(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.fs)), !0);
        }), o), Gr.resolve(this.ys(s));
    }, t.prototype.ys = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e._s(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.removeMutationBatch = function(t, e) {
        var n = this;
        G(0 === this.ps(e.batchId, "removed")), this.An.shift();
        var r = this.ws;
        return Gr.forEach(e.mutations, (function(i) {
            var o = new Ao(i.key, e.batchId);
            return r = r.delete(o), n.referenceDelegate.markPotentiallyOrphaned(t, i.key);
        })).next((function() {
            n.ws = r;
        }));
    }, t.prototype.ee = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.containsKey = function(t, e) {
        var n = new Ao(e, 0), r = this.ws.firstAfterOrEqual(n);
        return Gr.resolve(e.isEqual(r && r.key));
    }, t.prototype.performConsistencyCheck = function(t) {
        return this.An.length, Gr.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.ps = function(t, e) {
        return this.gs(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.gs = function(t) {
        return 0 === this.An.length ? 0 : t - this.An[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype._s = function(t) {
        var e = this.gs(t);
        return e < 0 || e >= this.An.length ? null : this.An[e];
    }, t;
}(), No = /** @class */ function() {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    function t(t, e) {
        this.Jt = t, this.Ts = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new gn(Lt.comparator), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.addEntry = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.Ts(e);
        return this.docs = this.docs.insert(r, {
            document: e.clone(),
            size: s,
            readTime: n
        }), this.size += s - o, this.Jt.addToCollectionParentIndex(t, r.path.popLast());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.removeEntry = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.getEntry = function(t, e) {
        var n = this.docs.get(e);
        return Gr.resolve(n ? n.document.clone() : Jt.newInvalidDocument(e));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Sn();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.insert(t, e ? e.document.clone() : Jt.newInvalidDocument(t));
        })), Gr.resolve(r);
    }, t.prototype.getDocumentsMatchingQuery = function(t, e, n) {
        for (var r = Sn(), i = new Lt(e.path.child("")), o = this.docs.getIteratorFrom(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.hasNext(); ) {
            var s = o.getNext(), a = s.key, u = s.value, c = u.document, h = u.readTime;
            if (!e.path.isPrefixOf(a.path)) break;
            h.compareTo(n) <= 0 || xe(e, c) && (r = r.insert(c.key, c.clone()));
        }
        return Gr.resolve(r);
    }, t.prototype.Es = function(t, e) {
        return Gr.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.newChangeBuffer = function(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new Co(this);
    }, t.prototype.getSize = function(t) {
        return Gr.resolve(this.size);
    }, t;
}(), Co = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).De = t, n;
    }
    return t(n, e), n.prototype.applyChanges = function(t) {
        var e = this, n = [];
        return this.changes.forEach((function(r, i) {
            i.document.isValidDocument() ? n.push(e.De.addEntry(t, i.document, e.getReadTime(r))) : e.De.removeEntry(r);
        })), Gr.waitFor(n);
    }, n.prototype.getFromCache = function(t, e) {
        return this.De.getEntry(t, e);
    }, n.prototype.getAllFromCache = function(t, e) {
        return this.De.getEntries(t, e);
    }, n;
}(zi), xo = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.Is = new Gi((function(t) {
            return $t(t);
        }), te), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = lt.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.As = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.Rs = new ko, this.targetCount = 0, this.Ps = Ri.ie();
    }
    return t.prototype.forEachTarget = function(t, e) {
        return this.Is.forEach((function(t, n) {
            return e(n);
        })), Gr.resolve();
    }, t.prototype.getLastRemoteSnapshotVersion = function(t) {
        return Gr.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.getHighestSequenceNumber = function(t) {
        return Gr.resolve(this.As);
    }, t.prototype.allocateTargetId = function(t) {
        return this.highestTargetId = this.Ps.next(), Gr.resolve(this.highestTargetId);
    }, t.prototype.setTargetsMetadata = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.As && (this.As = e), 
        Gr.resolve();
    }, t.prototype.ce = function(t) {
        this.Is.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.Ps = new Ri(e), this.highestTargetId = e), t.sequenceNumber > this.As && (this.As = t.sequenceNumber);
    }, t.prototype.addTargetData = function(t, e) {
        return this.ce(e), this.targetCount += 1, Gr.resolve();
    }, t.prototype.updateTargetData = function(t, e) {
        return this.ce(e), Gr.resolve();
    }, t.prototype.removeTargetData = function(t, e) {
        return this.Is.delete(e.target), this.Rs.us(e.targetId), this.targetCount -= 1, 
        Gr.resolve();
    }, t.prototype.removeTargets = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.Is.forEach((function(s, a) {
            a.sequenceNumber <= e && null === n.get(a.targetId) && (r.Is.delete(s), o.push(r.removeMatchingKeysForTargetId(t, a.targetId)), 
            i++);
        })), Gr.waitFor(o).next((function() {
            return i;
        }));
    }, t.prototype.getTargetCount = function(t) {
        return Gr.resolve(this.targetCount);
    }, t.prototype.getTargetData = function(t, e) {
        var n = this.Is.get(e) || null;
        return Gr.resolve(n);
    }, t.prototype.addMatchingKeys = function(t, e, n) {
        return this.Rs.rs(e, n), Gr.resolve();
    }, t.prototype.removeMatchingKeys = function(t, e, n) {
        this.Rs.cs(e, n);
        var r = this.persistence.referenceDelegate, i = [];
        return r && e.forEach((function(e) {
            i.push(r.markPotentiallyOrphaned(t, e));
        })), Gr.waitFor(i);
    }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
        return this.Rs.us(e), Gr.resolve();
    }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
        var n = this.Rs.ls(e);
        return Gr.resolve(n);
    }, t.prototype.containsKey = function(t, e) {
        return Gr.resolve(this.Rs.containsKey(e));
    }, t;
}(), Ro = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, e) {
        var n = this;
        this.bs = {}, this.Be = new ot(0), this.Ue = !1, this.Ue = !0, this.referenceDelegate = t(this), 
        this.He = new xo(this), this.Jt = new wi, this.Je = function(t, e) {
            return new No(t, (function(t) {
                return n.referenceDelegate.vs(t);
            }));
        }(this.Jt), this.k = new oi(e), this.Ye = new _o(this.k);
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.shutdown = function() {
        // No durable state to ensure is closed on shutdown.
        return this.Ue = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "started", {
        get: function() {
            return this.Ue;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.setDatabaseDeletedListener = function() {
        // No op.
    }, t.prototype.setNetworkEnabled = function() {
        // No op.
    }, t.prototype.getIndexManager = function() {
        return this.Jt;
    }, t.prototype.getMutationQueue = function(t) {
        var e = this.bs[t.toKey()];
        return e || (e = new Do(this.Jt, this.referenceDelegate), this.bs[t.toKey()] = e), 
        e;
    }, t.prototype.getTargetCache = function() {
        return this.He;
    }, t.prototype.getRemoteDocumentCache = function() {
        return this.Je;
    }, t.prototype.getBundleCache = function() {
        return this.Ye;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        q("MemoryPersistence", "Starting transaction:", t);
        var i = new Lo(this.Be.next());
        return this.referenceDelegate.Vs(), n(i).next((function(t) {
            return r.referenceDelegate.Ss(i).next((function() {
                return t;
            }));
        })).toPromise().then((function(t) {
            return i.raiseOnCommittedEvent(), t;
        }));
    }, t.prototype.Ds = function(t, e) {
        return Gr.or(Object.values(this.bs).map((function(n) {
            return function() {
                return n.containsKey(t, e);
            };
        })));
    }, t;
}(), Lo = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).currentSequenceNumber = t, n;
    }
    return t(n, e), n;
}(Kr), Oo = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Cs = new ko, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Ns = null;
    }
    return t.ks = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "xs", {
        get: function() {
            if (this.Ns) return this.Ns;
            throw K();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.addReference = function(t, e, n) {
        return this.Cs.addReference(n, e), this.xs.delete(n.toString()), Gr.resolve();
    }, t.prototype.removeReference = function(t, e, n) {
        return this.Cs.removeReference(n, e), this.xs.add(n.toString()), Gr.resolve();
    }, t.prototype.markPotentiallyOrphaned = function(t, e) {
        return this.xs.add(e.toString()), Gr.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.Cs.us(e.targetId).forEach((function(t) {
            return n.xs.add(t.toString());
        }));
        var r = this.persistence.getTargetCache();
        return r.getMatchingKeysForTargetId(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.xs.add(t.toString());
            }));
        })).next((function() {
            return r.removeTargetData(t, e);
        }));
    }, t.prototype.Vs = function() {
        this.Ns = new Set;
    }, t.prototype.Ss = function(t) {
        var e = this, n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        // Remove newly orphaned documents.
                return Gr.forEach(this.xs, (function(r) {
            var i = Lt.fromPath(r);
            return e.$s(t, i).next((function(t) {
                t || n.removeEntry(i);
            }));
        })).next((function() {
            return e.Ns = null, n.apply(t);
        }));
    }, t.prototype.updateLimboDocument = function(t, e) {
        var n = this;
        return this.$s(t, e).next((function(t) {
            t ? n.xs.delete(e.toString()) : n.xs.add(e.toString());
        }));
    }, t.prototype.vs = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.$s = function(t, e) {
        var n = this;
        return Gr.or([ function() {
            return Gr.resolve(n.Cs.containsKey(e));
        }, function() {
            return n.persistence.getTargetCache().containsKey(t, e);
        }, function() {
            return n.persistence.Ds(t, e);
        } ]);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function Po(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function Fo(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.isAuthenticated() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function Mo(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var Vo = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fs = function(e, n, r) {
        var i, o = JSON.parse(r), s = "object" == typeof o && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(o.state) && (void 0 === o.error || "object" == typeof o.error);
        return s && o.error && ((s = "string" == typeof o.error.message && "string" == typeof o.error.code) && (i = new H(o.error.code, o.error.message))), 
        s ? new t(e, n, o.state, i) : (U("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.Os = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), qo = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fs = function(e, n) {
        var r, i = JSON.parse(n), o = "object" == typeof i && -1 !== [ "not-current", "current", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error);
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new H(i.error.code, i.error.message))), 
        o ? new t(e, i.state, r) : (U("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.Os = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Uo = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fs = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Rn(), s = 0; i && s < r.activeTargetIds.length; ++s) i = Rt(r.activeTargetIds[s]), 
        o = o.add(r.activeTargetIds[s]);
        return i ? new t(e, o) : (U("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), Bo = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fs = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (U("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), jo = /** @class */ function() {
    function t() {
        this.activeTargetIds = Rn();
    }
    return t.prototype.Ms = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.Ls = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Os = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Ko = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.window = t, this.Oe = e, this.persistenceKey = n, this.Bs = r, this.syncEngine = null, 
        this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.Us = this.qs.bind(this), 
        this.Ks = new gn(ut), this.started = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.js = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Qs = Po(this.persistenceKey, this.Bs), 
        this.Ws = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.Ks = this.Ks.insert(this.Bs, new jo), this.Gs = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), 
        this.zs = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Hs = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), 
        this.Js = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), this.Ys = function(t) {
            return "firestore_bundle_loaded_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.Us);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.bt = function(t) {
        return !(!t || !t.localStorage);
    }, t.prototype.start = function() {
        return n(this, void 0, void 0, (function() {
            var t, e, n, i, o, s, a, u, c, h, f, l = this;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.syncEngine.Tn() ];

                  case 1:
                    for (t = r.sent(), e = 0, n = t; e < n.length; e++) (i = n[e]) !== this.Bs && (o = this.getItem(Po(this.persistenceKey, i))) && (s = Uo.Fs(i, o)) && (this.Ks = this.Ks.insert(s.clientId, s));
                    for (this.Xs(), (a = this.storage.getItem(this.Js)) && (u = this.Zs(a)) && this.ti(u), 
                    c = 0, h = this.js; c < h.length; c++) f = h[c], this.qs(f);
                    return this.js = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.window.addEventListener("pagehide", (function() {
                        return l.shutdown();
                    })), this.started = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.writeSequenceNumber = function(t) {
        this.setItem(this.Ws, JSON.stringify(t));
    }, t.prototype.getAllActiveQueryTargets = function() {
        return this.ei(this.Ks);
    }, t.prototype.isActiveQueryTarget = function(t) {
        var e = !1;
        return this.Ks.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, t.prototype.addPendingMutation = function(t) {
        this.ni(t, "pending");
    }, t.prototype.updateMutationState = function(t, e, n) {
        this.ni(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.si(t);
    }, t.prototype.addLocalQueryTarget = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.isActiveQueryTarget(t)) {
            var n = this.storage.getItem(Mo(this.persistenceKey, t));
            if (n) {
                var r = qo.Fs(t, n);
                r && (e = r.state);
            }
        }
        return this.ii.Ms(t), this.Xs(), e;
    }, t.prototype.removeLocalQueryTarget = function(t) {
        this.ii.Ls(t), this.Xs();
    }, t.prototype.isLocalQueryTarget = function(t) {
        return this.ii.activeTargetIds.has(t);
    }, t.prototype.clearQueryState = function(t) {
        this.removeItem(Mo(this.persistenceKey, t));
    }, t.prototype.updateQueryState = function(t, e, n) {
        this.ri(t, e, n);
    }, t.prototype.handleUserChange = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.si(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.addPendingMutation(t);
        }));
    }, t.prototype.setOnlineState = function(t) {
        this.oi(t);
    }, t.prototype.notifyBundleLoaded = function() {
        this.ai();
    }, t.prototype.shutdown = function() {
        this.started && (this.window.removeEventListener("storage", this.Us), this.removeItem(this.Qs), 
        this.started = !1);
    }, t.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return q("SharedClientState", "READ", t, e), e;
    }, t.prototype.setItem = function(t, e) {
        q("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, t.prototype.removeItem = function(t) {
        q("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.qs = function(t) {
        var e = this, i = t;
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
                if (i.storageArea === this.storage) {
            if (q("SharedClientState", "EVENT", i.key, i.newValue), i.key === this.Qs) return void U("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Oe.enqueueRetryable((function() {
                return n(e, void 0, void 0, (function() {
                    var t, e, n, o, s, a;
                    return r(this, (function(r) {
                        if (this.started) {
                            if (null !== i.key) if (this.Gs.test(i.key)) {
                                if (null == i.newValue) return t = this.ci(i.key), [ 2 /*return*/ , this.ui(t, null) ];
                                if (e = this.hi(i.key, i.newValue)) return [ 2 /*return*/ , this.ui(e.clientId, e) ];
                            } else if (this.zs.test(i.key)) {
                                if (null !== i.newValue && (n = this.li(i.key, i.newValue))) return [ 2 /*return*/ , this.fi(n) ];
                            } else if (this.Hs.test(i.key)) {
                                if (null !== i.newValue && (o = this.di(i.key, i.newValue))) return [ 2 /*return*/ , this.wi(o) ];
                            } else if (i.key === this.Js) {
                                if (null !== i.newValue && (s = this.Zs(i.newValue))) return [ 2 /*return*/ , this.ti(s) ];
                            } else if (i.key === this.Ws) a = function(t) {
                                var e = ot.I;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    G("number" == typeof n), e = n;
                                } catch (t) {
                                    U("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(i.newValue), a !== ot.I && this.sequenceNumberHandler(a); else if (i.key === this.Ys) return [ 2 /*return*/ , this.syncEngine._i() ];
                        } else this.js.push(i);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "ii", {
        get: function() {
            return this.Ks.get(this.Bs);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Xs = function() {
        this.setItem(this.Qs, this.ii.Os());
    }, t.prototype.ni = function(t, e, n) {
        var r = new Vo(this.currentUser, t, e, n), i = Fo(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.Os());
    }, t.prototype.si = function(t) {
        var e = Fo(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, t.prototype.oi = function(t) {
        var e = {
            clientId: this.Bs,
            onlineState: t
        };
        this.storage.setItem(this.Js, JSON.stringify(e));
    }, t.prototype.ri = function(t, e, n) {
        var r = Mo(this.persistenceKey, t), i = new qo(t, e, n);
        this.setItem(r, i.Os());
    }, t.prototype.ai = function() {
        this.setItem(this.Ys, "value-not-used");
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.ci = function(t) {
        var e = this.Gs.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.hi = function(t, e) {
        var n = this.ci(t);
        return Uo.Fs(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.li = function(t, e) {
        var n = this.zs.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return Vo.Fs(new O(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.di = function(t, e) {
        var n = this.Hs.exec(t), r = Number(n[1]);
        return qo.Fs(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Zs = function(t) {
        return Bo.Fs(t);
    }, t.prototype.fi = function(t) {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(e) {
                return t.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this.syncEngine.mi(t.batchId, t.state, t.error) ] : (q("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, t.prototype.wi = function(t) {
        return this.syncEngine.gi(t.targetId, t.state, t.error);
    }, t.prototype.ui = function(t, e) {
        var n = this, r = e ? this.Ks.insert(t, e) : this.Ks.remove(t), i = this.ei(this.Ks), o = this.ei(r), s = [], a = [];
        return o.forEach((function(t) {
            i.has(t) || s.push(t);
        })), i.forEach((function(t) {
            o.has(t) || a.push(t);
        })), this.syncEngine.yi(s, a).then((function() {
            n.Ks = r;
        }));
    }, t.prototype.ti = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Ks.get(t.clientId) && this.onlineStateHandler(t.onlineState);
    }, t.prototype.ei = function(t) {
        var e = Rn();
        return t.forEach((function(t, n) {
            e = e.unionWith(n.activeTargetIds);
        })), e;
    }, t;
}(), Go = /** @class */ function() {
    function t() {
        this.pi = new jo, this.Ti = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
    }
    return t.prototype.addPendingMutation = function(t) {
        // No op.
    }, t.prototype.updateMutationState = function(t, e, n) {
        // No op.
    }, t.prototype.addLocalQueryTarget = function(t) {
        return this.pi.Ms(t), this.Ti[t] || "not-current";
    }, t.prototype.updateQueryState = function(t, e, n) {
        this.Ti[t] = e;
    }, t.prototype.removeLocalQueryTarget = function(t) {
        this.pi.Ls(t);
    }, t.prototype.isLocalQueryTarget = function(t) {
        return this.pi.activeTargetIds.has(t);
    }, t.prototype.clearQueryState = function(t) {
        delete this.Ti[t];
    }, t.prototype.getAllActiveQueryTargets = function() {
        return this.pi.activeTargetIds;
    }, t.prototype.isActiveQueryTarget = function(t) {
        return this.pi.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.pi = new jo, Promise.resolve();
    }, t.prototype.handleUserChange = function(t, e, n) {
        // No op.
    }, t.prototype.setOnlineState = function(t) {
        // No op.
    }, t.prototype.shutdown = function() {}, t.prototype.writeSequenceNumber = function(t) {}, 
    t.prototype.notifyBundleLoaded = function() {
        // No op.
    }, t;
}(), zo = /** @class */ function() {
    function t() {}
    return t.prototype.Ei = function(t) {
        // No-op.
    }, t.prototype.shutdown = function() {
        // No-op.
    }, t;
}(), Qo = /** @class */ function() {
    function t() {
        var t = this;
        this.Ii = function() {
            return t.Ai();
        }, this.Ri = function() {
            return t.Pi();
        }, this.bi = [], this.vi();
    }
    return t.prototype.Ei = function(t) {
        this.bi.push(t);
    }, t.prototype.shutdown = function() {
        window.removeEventListener("online", this.Ii), window.removeEventListener("offline", this.Ri);
    }, t.prototype.vi = function() {
        window.addEventListener("online", this.Ii), window.addEventListener("offline", this.Ri);
    }, t.prototype.Ai = function() {
        q("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.bi; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.Pi = function() {
        q("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.bi; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.bt = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), Wo = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, Ho = /** @class */ function() {
    function t(t) {
        this.Vi = t.Vi, this.Si = t.Si;
    }
    return t.prototype.Di = function(t) {
        this.Ci = t;
    }, t.prototype.Ni = function(t) {
        this.ki = t;
    }, t.prototype.onMessage = function(t) {
        this.xi = t;
    }, t.prototype.close = function() {
        this.Si();
    }, t.prototype.send = function(t) {
        this.Vi(t);
    }, t.prototype.$i = function() {
        this.Ci();
    }, t.prototype.Fi = function(t) {
        this.ki(t);
    }, t.prototype.Oi = function(t) {
        this.xi(t);
    }, t;
}(), Yo = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n.autoDetectLongPolling = t.autoDetectLongPolling, 
        n.useFetchStreams = t.useFetchStreams, n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return t(n, e), n.prototype.Ki = function(t, e, n, r) {
        return new Promise((function(i, o) {
            var s = new S;
            s.listenOnce(_.COMPLETE, (function() {
                try {
                    switch (s.getLastErrorCode()) {
                      case k.NO_ERROR:
                        var e = s.getResponseJson();
                        q("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case k.TIMEOUT:
                        q("Connection", 'RPC "' + t + '" timed out'), o(new H(W.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case k.HTTP_ERROR:
                        var n = s.getStatus();
                        if (q("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", s.getResponseText()), 
                        n > 0) {
                            var r = s.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var a = function(t) {
                                    var e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(W).indexOf(e) >= 0 ? e : W.UNKNOWN;
                                }(r.status);
                                o(new H(a, r.message));
                            } else o(new H(W.UNKNOWN, "Server responded with status " + s.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        o(new H(W.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        K();
                    }
                } finally {
                    q("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var a = JSON.stringify(r);
            s.send(e, "POST", a, n, 15);
        }));
    }, n.prototype.Qi = function(t, e, n) {
        var r = [ this.Mi, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], i = A(), o = D(), s = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.autoDetectLongPolling
        };
        this.useFetchStreams && (s.xmlHttpFactory = new N({})), this.qi(s.initMessageHeaders, e, n), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        p() || y() || v() || m() || g() || w() || (s.httpHeadersOverwriteParam = "$httpHeaders");
        var a = r.join("");
        q("Connection", "Creating WebChannel: " + a, s);
        var u = i.createWebChannel(a, s), c = !1, h = !1, f = new Ho({
            Vi: function(t) {
                h ? q("Connection", "Not sending because WebChannel is closed:", t) : (c || (q("Connection", "Opening WebChannel transport."), 
                u.open(), c = !0), q("Connection", "WebChannel sending:", t), u.send(t));
            },
            Si: function() {
                return u.close();
            }
        }), l = function(t, e, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (function(t) {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return l(u, C.EventType.OPEN, (function() {
            h || q("Connection", "WebChannel transport opened.");
        })), l(u, C.EventType.CLOSE, (function() {
            h || (h = !0, q("Connection", "WebChannel transport closed"), f.Fi());
        })), l(u, C.EventType.ERROR, (function(t) {
            h || (h = !0, B("Connection", "WebChannel transport errored:", t), f.Fi(new H(W.UNAVAILABLE, "The operation could not be completed")));
        })), l(u, C.EventType.MESSAGE, (function(t) {
            var e;
            if (!h) {
                var n = t.data[0];
                G(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    q("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = 
                    /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */
                    function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = fn[t];
                        if (void 0 !== e) return mn(e);
                    }(o), a = i.message;
                    void 0 === s && (s = W.INTERNAL, a = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    h = !0, f.Fi(new H(s, a)), u.close();
                } else q("Connection", "WebChannel received:", n), f.Oi(n);
            }
        })), l(o, x.STAT_EVENT, (function(t) {
            t.stat === R.PROXY ? q("Connection", "Detected buffering proxy") : t.stat === R.NOPROXY && q("Connection", "Detected no buffering proxy");
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            f.$i();
        }), 0), f;
    }, n;
}(/** @class */ function() {
    function t(t) {
        this.databaseInfo = t, this.databaseId = t.databaseId;
        var e = t.ssl ? "https" : "http";
        this.Mi = e + "://" + t.host, this.Li = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    return t.prototype.Bi = function(t, e, n, r, i) {
        var o = this.Ui(t, e);
        q("RestConnection", "Sending: ", o, n);
        var s = {};
        return this.qi(s, r, i), this.Ki(t, o, s, n).then((function(t) {
            return q("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw B("RestConnection", t + " failed with error: ", e, "url: ", o, "request:", n), 
            e;
        }));
    }, t.prototype.ji = function(t, e, n, r, i) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Bi(t, e, n, r, i);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.qi = function(t, e, n) {
        t["X-Goog-Api-Client"] = "gl-js/ fire/" + P, 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), 
        e && e.headers.forEach((function(e, n) {
            return t[n] = e;
        })), n && n.headers.forEach((function(e, n) {
            return t[n] = e;
        }));
    }, t.prototype.Ui = function(t, e) {
        var n = Wo[t];
        return this.Mi + "/v1/" + e + ":" + n;
    }, t;
}());

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the WebChannelConnection for the browser. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'window' implementation or null if not available. */
function Jo() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function Xo() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zo(t) {
    return new Gn(t, /* useProto3Json= */ !0);
}

/**
 * An instance of the Platform's 'TextEncoder' implementation.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ var $o = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.Oe = t, this.timerId = e, this.Wi = n, this.Gi = r, this.zi = i, this.Hi = 0, 
        this.Ji = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Yi = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.Hi = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.Xi = function() {
        this.Hi = this.zi;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Zi = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.Hi + this.tr()), r = Math.max(0, Date.now() - this.Yi), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && q("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Hi + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Ji = this.Oe.enqueueAfterDelay(this.timerId, i, (function() {
            return e.Yi = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Hi *= this.Gi, this.Hi < this.Wi && (this.Hi = this.Wi), this.Hi > this.zi && (this.Hi = this.zi);
    }, t.prototype.er = function() {
        null !== this.Ji && (this.Ji.skipDelay(), this.Ji = null);
    }, t.prototype.cancel = function() {
        null !== this.Ji && (this.Ji.cancel(), this.Ji = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.tr = function() {
        return (Math.random() - .5) * this.Hi;
    }, t;
}(), ts = /** @class */ function() {
    function t(t, e, n, r, i, o, s, a) {
        this.Oe = t, this.nr = n, this.sr = r, this.ir = i, this.authCredentialsProvider = o, 
        this.appCheckCredentialsProvider = s, this.listener = a, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.rr = 0, this.ar = null, this.cr = null, this.stream = null, this.ur = new $o(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.hr = function() {
        return 1 /* Starting */ === this.state || 5 /* Backoff */ === this.state || this.lr();
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.lr = function() {
        return 2 /* Open */ === this.state || 3 /* Healthy */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        4 /* Error */ !== this.state ? this.auth() : this.dr();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.hr() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.wr = function() {
        this.state = 0 /* Initial */ , this.ur.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype._r = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.lr() && null === this.ar && (this.ar = this.Oe.enqueueAfterDelay(this.nr, 6e4, (function() {
            return t.mr();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.gr = function(t) {
        this.yr(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.mr = function() {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(t) {
                return this.lr() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.yr = function() {
        this.ar && (this.ar.cancel(), this.ar = null);
    }, 
    /** Cancels the health check delayed operation. */ t.prototype.pr = function() {
        this.cr && (this.cr.cancel(), this.cr = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */
    t.prototype.close = function(t, e) {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.yr(), this.pr(), this.ur.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.rr++, 4 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.ur.reset() : e && e.code === W.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    U(e.toString()), U("Using maximum backoff delay to prevent overloading the backend."), 
                    this.ur.Xi()) : e && e.code === W.UNAUTHENTICATED && 3 /* Healthy */ !== this.state && (
                    // "unauthenticated" error means the token was rejected. This should rarely
                    // happen since both Auth and AppCheck ensure a sufficient TTL when we
                    // request a token. If a user manually resets their system clock this can
                    // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
                    // before we received the first message and we need to invalidate the token
                    // to ensure that we fetch a new token.
                    this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.Tr(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.Ni(e) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.Tr = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Er(this.rr), n = this.rr;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                Promise.all([ this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken() ]).then((function(e) {
            var r = e[0], i = e[1];
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
                        t.rr === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Ir(r, i);
        }), (function(n) {
            e((function() {
                var e = new H(W.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.Ar(e);
            }));
        }));
    }, t.prototype.Ir = function(t, e) {
        var n = this, r = this.Er(this.rr);
        this.stream = this.Rr(t, e), this.stream.Di((function() {
            r((function() {
                return n.state = 2 /* Open */ , n.cr = n.Oe.enqueueAfterDelay(n.sr, 1e4, (function() {
                    return n.lr() && (n.state = 3 /* Healthy */), Promise.resolve();
                })), n.listener.Di();
            }));
        })), this.stream.Ni((function(t) {
            r((function() {
                return n.Ar(t);
            }));
        })), this.stream.onMessage((function(t) {
            r((function() {
                return n.onMessage(t);
            }));
        }));
    }, t.prototype.dr = function() {
        var t = this;
        this.state = 5 /* Backoff */ , this.ur.Zi((function() {
            return n(t, void 0, void 0, (function() {
                return r(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.Ar = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return q("PersistentStream", "close with error: " + t), this.stream = null, this.close(4 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Er = function(t) {
        var e = this;
        return function(n) {
            e.Oe.enqueueAndForget((function() {
                return e.rr === t ? n() : (q("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), es = /** @class */ function(e) {
    function n(t, n, r, i, o, s) {
        var a = this;
        return (a = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , "health_check_timeout" /* HealthCheckTimeout */ , n, r, i, s) || this).k = o, 
        a;
    }
    return t(n, e), n.prototype.Rr = function(t, e) {
        return this.ir.Qi("Listen", t, e);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.ur.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : K();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.C ? (G(void 0 === e || "string" == typeof e), Tt.fromBase64String(e || "")) : (G(void 0 === e || e instanceof Uint8Array), 
                    Tt.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), s = e.targetChange.cause, a = s && function(t) {
                    var e = void 0 === t.code ? W.UNKNOWN : mn(t.code);
                    return new H(e, t.message || "");
                }(s);
                n = new Mn(r, i, o, a || null);
            } else if ("documentChange" in e) {
                e.documentChange;
                var u = e.documentChange;
                u.document, u.document.name, u.document.updateTime;
                var c = Zn(t, u.document.name), h = Hn(u.document.updateTime), f = new Ht({
                    mapValue: {
                        fields: u.document.fields
                    }
                }), l = Jt.newFoundDocument(c, h, f), d = u.targetIds || [], p = u.removedTargetIds || [];
                n = new Pn(d, p, l.key, l);
            } else if ("documentDelete" in e) {
                e.documentDelete;
                var y = e.documentDelete;
                y.document;
                var v = Zn(t, y.document), m = y.readTime ? Hn(y.readTime) : lt.min(), g = Jt.newNoDocument(v, m), w = y.removedTargetIds || [];
                n = new Pn([], w, g.key, g);
            } else if ("documentRemove" in e) {
                e.documentRemove;
                var b = e.documentRemove;
                b.document;
                var I = Zn(t, b.document), T = b.removedTargetIds || [];
                n = new Pn([], T, I, null);
            } else {
                if (!("filter" in e)) return K();
                e.filter;
                var E = e.filter;
                E.targetId;
                var S = E.count || 0, _ = new yn(S), k = E.targetId;
                n = new Fn(k, _);
            }
            return n;
        }(this.k, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return lt.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? lt.min() : e.readTime ? Hn(e.readTime) : lt.min();
        }(t);
        return this.listener.Pr(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.br = function(t) {
        var e = {};
        e.database = er(this.k), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = ee(r) ? {
                documents: ar(t, r)
            } : {
                query: ur(t, r)
            }).targetId = e.targetId, e.resumeToken.approximateByteSize() > 0 ? n.resumeToken = Qn(t, e.resumeToken) : e.snapshotVersion.compareTo(lt.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = zn(t, e.snapshotVersion.toTimestamp())), n;
        }(this.k, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return K();
                }
            }(0, e.purpose);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.k, t);
        n && (e.labels = n), this.gr(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.vr = function(t) {
        var e = {};
        e.database = er(this.k), e.removeTarget = t, this.gr(e);
    }, n;
}(ts), ns = /** @class */ function(e) {
    function n(t, n, r, i, o, s) {
        var a = this;
        return (a = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , "health_check_timeout" /* HealthCheckTimeout */ , n, r, i, s) || this).k = o, 
        a.Vr = !1, a;
    }
    return t(n, e), Object.defineProperty(n.prototype, "Sr", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.Vr;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.Vr = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
    }, n.prototype.Tr = function() {
        this.Vr && this.Dr([]);
    }, n.prototype.Rr = function(t, e) {
        return this.ir.Qi("Write", t, e);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        G(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Vr) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.ur.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (G(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? Hn(t.updateTime) : Hn(e);
                        return n.isEqual(lt.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = Hn(e)), new Je(n, t.transformResults || []);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = Hn(t.commitTime);
            return this.listener.Cr(n, e);
        }
        // The first response is always the handshake response
                return G(!t.writeResults || 0 === t.writeResults.length), this.Vr = !0, 
        this.listener.Nr();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.kr = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = er(this.k), this.gr(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.Dr = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return or(e.k, t);
            }))
        };
        this.gr(n);
    }, n;
}(ts), rs = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).authCredentials = t, o.appCheckCredentials = n, 
        o.ir = r, o.k = i, o.$r = !1, o;
    }
    return t(n, e), n.prototype.Fr = function() {
        if (this.$r) throw new H(W.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Invokes the provided RPC with auth and AppCheck tokens. */ n.prototype.Bi = function(t, e, n) {
        var r = this;
        return this.Fr(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((function(i) {
            var o = i[0], s = i[1];
            return r.ir.Bi(t, e, n, o, s);
        })).catch((function(t) {
            throw "FirebaseError" === t.name ? (t.code === W.UNAUTHENTICATED && (r.authCredentials.invalidateToken(), 
            r.appCheckCredentials.invalidateToken()), t) : new H(W.UNKNOWN, t.toString());
        }));
    }, 
    /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */ n.prototype.ji = function(t, e, n) {
        var r = this;
        return this.Fr(), Promise.all([ this.authCredentials.getToken(), this.appCheckCredentials.getToken() ]).then((function(i) {
            var o = i[0], s = i[1];
            return r.ir.ji(t, e, n, o, s);
        })).catch((function(t) {
            throw "FirebaseError" === t.name ? (t.code === W.UNAUTHENTICATED && (r.authCredentials.invalidateToken(), 
            r.appCheckCredentials.invalidateToken()), t) : new H(W.UNKNOWN, t.toString());
        }));
    }, n.prototype.terminate = function() {
        this.$r = !0;
    }, n;
}((function() {})), is = /** @class */ function() {
    function t(t, e) {
        this.asyncQueue = t, this.onlineStateHandler = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Or = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Mr = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Lr = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Br = function() {
        var t = this;
        0 === this.Or && (this.Ur("Unknown" /* Unknown */), this.Mr = this.asyncQueue.enqueueAfterDelay("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.Mr = null, t.qr("Backend didn't respond within 10 seconds."), t.Ur("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Kr = function(t) {
        "Online" /* Online */ === this.state ? this.Ur("Unknown" /* Unknown */) : (this.Or++, 
        this.Or >= 1 && (this.jr(), this.qr("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Ur("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.jr(), this.Or = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Lr = !1), this.Ur(t);
    }, t.prototype.Ur = function(t) {
        t !== this.state && (this.state = t, this.onlineStateHandler(t));
    }, t.prototype.qr = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Lr ? (U(e), this.Lr = !1) : q("OnlineStateTracker", e);
    }, t.prototype.jr = function() {
        null !== this.Mr && (this.Mr.cancel(), this.Mr = null);
    }, t;
}(), os = function(
/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
t, 
/** The client-side proxy for interacting with the backend. */
e, i, o, s) {
    var a = this;
    this.localStore = t, this.datastore = e, this.asyncQueue = i, this.remoteSyncer = {}, 
    /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
    this.Qr = [], 
    /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
    this.Wr = new Map, 
    /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
    this.Gr = new Set, 
    /**
             * Event handlers that get called when the network is disabled or enabled.
             *
             * PORTING NOTE: These functions are used on the Web client to create the
             * underlying streams (to support tree-shakeable streams). On Android and iOS,
             * the streams are created during construction of RemoteStore.
             */
    this.zr = [], this.Hr = s, this.Hr.Ei((function(t) {
        i.enqueueAndForget((function() {
            return n(a, void 0, void 0, (function() {
                return r(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return ps(this) ? (q("RemoteStore", "Restarting streams for network reachability change."), 
                        [ 4 /*yield*/ , function(t) {
                            return n(this, void 0, void 0, (function() {
                                var e;
                                return r(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return (e = Q(t)).Gr.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , as(e) ];

                                      case 1:
                                        return n.sent(), e.Jr.set("Unknown" /* Unknown */), e.Gr.delete(4 /* ConnectivityChange */), 
                                        [ 4 /*yield*/ , ss(e) ];

                                      case 2:
                                        return n.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(this) ]) : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    })), this.Jr = new is(i, o);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ function ss(t) {
    return n(this, void 0, void 0, (function() {
        var e, n;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                if (!ps(t)) return [ 3 /*break*/ , 4 ];
                e = 0, n = t.zr, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !0) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ function as(t) {
    return n(this, void 0, void 0, (function() {
        var e, n;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                e = 0, n = t.zr, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !1) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */ function us(t, e) {
    var n = Q(t);
    n.Wr.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Wr.set(e.targetId, e), ds(n) ? 
    // The listen will be sent in onWatchStreamOpen
    ls(n) : Ns(n).lr() && hs(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function cs(t, e) {
    var n = Q(t), r = Ns(n);
    n.Wr.delete(e), r.lr() && fs(n, e), 0 === n.Wr.size && (r.lr() ? r._r() : ps(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.Jr.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function hs(t, e) {
    t.Yr.X(e.targetId), Ns(t).br(e)
    /**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */;
}

function fs(t, e) {
    t.Yr.X(e), Ns(t).vr(e);
}

function ls(t) {
    t.Yr = new qn({
        getRemoteKeysForTarget: function(e) {
            return t.remoteSyncer.getRemoteKeysForTarget(e);
        },
        Et: function(e) {
            return t.Wr.get(e) || null;
        }
    }), Ns(t).start(), t.Jr.Br()
    /**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */;
}

function ds(t) {
    return ps(t) && !Ns(t).hr() && t.Wr.size > 0;
}

function ps(t) {
    return 0 === Q(t).Gr.size;
}

function ys(t) {
    t.Yr = void 0;
}

function vs(t) {
    return n(this, void 0, void 0, (function() {
        return r(this, (function(e) {
            return t.Wr.forEach((function(e, n) {
                hs(t, e);
            })), [ 2 /*return*/ ];
        }));
    }));
}

function ms(t, e) {
    return n(this, void 0, void 0, (function() {
        return r(this, (function(n) {
            return ys(t), 
            // If we still need the watch stream, retry the connection.
            ds(t) ? (t.Jr.Kr(e), ls(t)) : 
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            t.Jr.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
        }));
    }));
}

function gs(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var o, s, a;
        return r(this, (function(u) {
            switch (u.label) {
              case 0:
                if (t.Jr.set("Online" /* Online */), !(e instanceof Mn && 2 /* Removed */ === e.state && e.cause)) 
                // Mark the client as online since we got a message from the server
                return [ 3 /*break*/ , 6 ];
                u.label = 1;

              case 1:
                return u.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , 
                /** Handles an error on a target */
                function(t, e) {
                    return n(this, void 0, void 0, (function() {
                        var n, i, o, s;
                        return r(this, (function(r) {
                            switch (r.label) {
                              case 0:
                                n = e.cause, i = 0, o = e.targetIds, r.label = 1;

                              case 1:
                                return i < o.length ? (s = o[i], t.Wr.has(s) ? [ 4 /*yield*/ , t.remoteSyncer.rejectListen(s, n) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                              case 2:
                                r.sent(), t.Wr.delete(s), t.Yr.removeTarget(s), r.label = 3;

                              case 3:
                                r.label = 4;

                              case 4:
                                return i++, [ 3 /*break*/ , 1 ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ];

              case 2:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 3:
                return o = u.sent(), q("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), o), 
                [ 4 /*yield*/ , ws(t, o) ];

              case 4:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 5:
                return [ 3 /*break*/ , 13 ];

              case 6:
                if (e instanceof Pn ? t.Yr.ot(e) : e instanceof Fn ? t.Yr.dt(e) : t.Yr.ut(e), i.isEqual(lt.min())) return [ 3 /*break*/ , 13 ];
                u.label = 7;

              case 7:
                return u.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , lo(t.localStore) ];

              case 8:
                return s = u.sent(), i.compareTo(s) >= 0 ? [ 4 /*yield*/ , 
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function(t, e) {
                    var n = t.Yr.gt(e);
                    // Update in-memory resume tokens. LocalStore will update the
                    // persistent view of these when applying the completed RemoteEvent.
                                        return n.targetChanges.forEach((function(n, r) {
                        if (n.resumeToken.approximateByteSize() > 0) {
                            var i = t.Wr.get(r);
                            // A watched target might have been removed already.
                                                        i && t.Wr.set(r, i.withResumeToken(n.resumeToken, e));
                        }
                    })), 
                    // Re-establish listens for the targets that have been invalidated by
                    // existence filter mismatches.
                    n.targetMismatches.forEach((function(e) {
                        var n = t.Wr.get(e);
                        if (n) {
                            // Clear the resume token for the target, since we're in a known mismatch
                            // state.
                            t.Wr.set(e, n.withResumeToken(Tt.EMPTY_BYTE_STRING, n.snapshotVersion)), 
                            // Cause a hard reset by unwatching and rewatching immediately, but
                            // deliberately don't send a resume token so that we get a full update.
                            fs(t, e);
                            // Mark the target we send as being on behalf of an existence filter
                            // mismatch, but don't actually retain that in listenTargets. This ensures
                            // that we flag the first re-listen this way without impacting future
                            // listens of this target (that might happen e.g. on reconnect).
                            var r = new ii(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                            hs(t, r);
                        }
                    })), t.remoteSyncer.applyRemoteEvent(n);
                }(t, i) ] : [ 3 /*break*/ , 10 ];

                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                u.sent(), u.label = 10;

              case 10:
                return [ 3 /*break*/ , 13 ];

              case 11:
                return q("RemoteStore", "Failed to raise snapshot:", a = u.sent()), [ 4 /*yield*/ , ws(t, a) ];

              case 12:
                return u.sent(), [ 3 /*break*/ , 13 ];

              case 13:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ function ws(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var o = this;
        return r(this, (function(s) {
            switch (s.label) {
              case 0:
                if (!Yr(e)) throw e;
                // Disable network and raise offline snapshots
                return t.Gr.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , as(t) ];

              case 1:
                // Disable network and raise offline snapshots
                return s.sent(), t.Jr.set("Offline" /* Offline */), i || (
                // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                i = function() {
                    return lo(t.localStore);
                }), 
                // Probe IndexedDB periodically and re-enable network
                t.asyncQueue.enqueueRetryable((function() {
                    return n(o, void 0, void 0, (function() {
                        return r(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return q("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , i() ];

                              case 1:
                                return e.sent(), t.Gr.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , ss(t) ];

                              case 2:
                                return e.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function bs(t, e) {
    return e().catch((function(n) {
        return ws(t, n, e);
    }));
}

function Is(t) {
    return n(this, void 0, void 0, (function() {
        var e, n, i, o, s;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                e = Q(t), n = Cs(e), i = e.Qr.length > 0 ? e.Qr[e.Qr.length - 1].batchId : -1, r.label = 1;

              case 1:
                if (!
                /**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */
                function(t) {
                    return ps(t) && t.Qr.length < 10;
                }
                /**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ (e)) return [ 3 /*break*/ , 7 ];
                r.label = 2;

              case 2:
                return r.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , vo(e.localStore, i) ];

              case 3:
                return null === (o = r.sent()) ? (0 === e.Qr.length && n._r(), [ 3 /*break*/ , 7 ]) : (i = o.batchId, 
                function(t, e) {
                    t.Qr.push(e);
                    var n = Cs(t);
                    n.lr() && n.Sr && n.Dr(e.mutations);
                }(e, o), [ 3 /*break*/ , 6 ]);

              case 4:
                return s = r.sent(), [ 4 /*yield*/ , ws(e, s) ];

              case 5:
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 3 /*break*/ , 1 ];

              case 7:
                return Ts(e) && Es(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ts(t) {
    return ps(t) && !Cs(t).hr() && t.Qr.length > 0;
}

function Es(t) {
    Cs(t).start();
}

function Ss(t) {
    return n(this, void 0, void 0, (function() {
        return r(this, (function(e) {
            return Cs(t).kr(), [ 2 /*return*/ ];
        }));
    }));
}

function _s(t) {
    return n(this, void 0, void 0, (function() {
        var e, n, i, o;
        return r(this, (function(r) {
            // Send the write pipeline now that the stream is established.
            for (e = Cs(t), n = 0, i = t.Qr; n < i.length; n++) o = i[n], e.Dr(o.mutations);
            return [ 2 /*return*/ ];
        }));
    }));
}

function ks(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var n, o;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return n = t.Qr.shift(), o = ri.from(n, e, i), [ 4 /*yield*/ , bs(t, (function() {
                    return t.remoteSyncer.applySuccessfulWrite(o);
                })) ];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return r.sent(), [ 4 /*yield*/ , Is(t) ];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return r.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function As(t, e) {
    return n(this, void 0, void 0, (function() {
        return r(this, (function(i) {
            switch (i.label) {
              case 0:
                return e && Cs(t).Sr ? [ 4 /*yield*/ , function(t, e) {
                    return n(this, void 0, void 0, (function() {
                        var n, i;
                        return r(this, (function(r) {
                            switch (r.label) {
                              case 0:
                                return vn(i = e.code) && i !== W.ABORTED ? (n = t.Qr.shift(), 
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                Cs(t).wr(), [ 4 /*yield*/ , bs(t, (function() {
                                    return t.remoteSyncer.rejectFailedWrite(n.batchId, e);
                                })) ]) : [ 3 /*break*/ , 3 ];

                              case 1:
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                return r.sent(), [ 4 /*yield*/ , Is(t) ];

                              case 2:
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                r.sent(), r.label = 3;

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ] : [ 3 /*break*/ , 2 ];

                // This error affects the actual write.
                              case 1:
                // This error affects the actual write.
                i.sent(), i.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return Ts(t) && Es(t), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */ function Ds(t, e) {
    return n(this, void 0, void 0, (function() {
        var n;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return n = Q(t), e ? (n.Gr.delete(2 /* IsSecondary */), [ 4 /*yield*/ , ss(n) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return r.sent(), [ 3 /*break*/ , 5 ];

              case 2:
                return e ? [ 3 /*break*/ , 4 ] : (n.Gr.add(2 /* IsSecondary */), [ 4 /*yield*/ , as(n) ]);

              case 3:
                r.sent(), n.Jr.set("Unknown" /* Unknown */), r.label = 4;

              case 4:
                r.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function Ns(t) {
    var e = this;
    return t.Xr || (
    // Create stream (but note that it is not started yet).
    t.Xr = function(t, e, n) {
        var r = Q(t);
        return r.Fr(), new es(e, r.ir, r.authCredentials, r.appCheckCredentials, r.k, n);
    }(t.datastore, t.asyncQueue, {
        Di: vs.bind(null, t),
        Ni: ms.bind(null, t),
        Pr: gs.bind(null, t)
    }), t.zr.push((function(i) {
        return n(e, void 0, void 0, (function() {
            return r(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return i ? (t.Xr.wr(), ds(t) ? ls(t) : t.Jr.set("Unknown" /* Unknown */), [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , t.Xr.stop() ];

                  case 2:
                    e.sent(), ys(t), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Xr
    /**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */;
}

function Cs(t) {
    var e = this;
    return t.Zr || (
    // Create stream (but note that it is not started yet).
    t.Zr = function(t, e, n) {
        var r = Q(t);
        return r.Fr(), new ns(e, r.ir, r.authCredentials, r.appCheckCredentials, r.k, n);
    }(t.datastore, t.asyncQueue, {
        Di: Ss.bind(null, t),
        Ni: As.bind(null, t),
        Nr: _s.bind(null, t),
        Cr: ks.bind(null, t)
    }), t.zr.push((function(i) {
        return n(e, void 0, void 0, (function() {
            return r(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return i ? (t.Zr.wr(), [ 4 /*yield*/ , Is(t) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , t.Zr.stop() ];

                  case 3:
                    e.sent(), t.Qr.length > 0 && (q("RemoteStore", "Stopping write stream with " + t.Qr.length + " pending writes"), 
                    t.Qr = []), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Zr
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */;
}

var xs = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, 
        this.deferred = new Y, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.createAndSchedule = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.timerHandle = setTimeout((function() {
            return e.handleDelayElapsed();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.skipDelay = function() {
        return this.handleDelayElapsed();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new H(W.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.handleDelayElapsed = function() {
        var t = this;
        this.asyncQueue.enqueueAndForget((function() {
            return null !== t.timerHandle ? (t.clearTimeout(), t.op().then((function(e) {
                return t.deferred.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), 
        this.timerHandle = null);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function Rs(t, e) {
    if (U("AsyncQueue", e + ": " + t), Yr(t)) return new H(W.UNAVAILABLE, e + ": " + t);
    throw t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Ls = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.comparator = t ? function(e, n) {
            return t(e, n) || Lt.comparator(e.key, n.key);
        } : function(t, e) {
            return Lt.comparator(t.key, e.key);
        }, this.keyedMap = kn(), this.sortedSet = new gn(this.comparator)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.emptySet = function(e) {
        return new t(e.comparator);
    }, t.prototype.has = function(t) {
        return null != this.keyedMap.get(t);
    }, t.prototype.get = function(t) {
        return this.keyedMap.get(t);
    }, t.prototype.first = function() {
        return this.sortedSet.minKey();
    }, t.prototype.last = function() {
        return this.sortedSet.maxKey();
    }, t.prototype.isEmpty = function() {
        return this.sortedSet.isEmpty();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.keyedMap.get(t);
        return e ? this.sortedSet.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.sortedSet.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.sortedSet.inorderTraversal((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator(); n.hasNext(); ) {
            var i = n.getNext().key, o = r.getNext().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r;
    }, t;
}(), Os = /** @class */ function() {
    function t() {
        this.eo = new gn(Lt.comparator);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.eo.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.eo = this.eo.insert(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.eo = this.eo.insert(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.eo = this.eo.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.eo = this.eo.insert(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.eo = this.eo.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.eo = this.eo.insert(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.eo = this.eo.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        K() : this.eo = this.eo.insert(e, t);
    }, t.prototype.no = function() {
        var t = [];
        return this.eo.inorderTraversal((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), Ps = /** @class */ function() {
    function t(t, e, n, r, i, o, s, a) {
        this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, 
        this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = a
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.fromInitialDocuments = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, Ls.emptySet(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.mutatedKeys.isEmpty();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && De(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), Fs = function() {
    this.so = void 0, this.listeners = [];
}, Ms = function() {
    this.queries = new Gi((function(t) {
        return Ne(t);
    }), De), this.onlineState = "Unknown" /* Unknown */ , this.io = new Set;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function Vs(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o, s, a, u, c;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                if (n = Q(t), i = e.query, o = !1, (s = n.queries.get(i)) || (o = !0, s = new Fs), 
                !o) return [ 3 /*break*/ , 4 ];
                r.label = 1;

              case 1:
                return r.trys.push([ 1, 3, , 4 ]), a = s, [ 4 /*yield*/ , n.onListen(i) ];

              case 2:
                return a.so = r.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                return u = r.sent(), c = Rs(u, "Initialization of query '" + Ce(e.query) + "' failed"), 
                [ 2 /*return*/ , void e.onError(c) ];

              case 4:
                return n.queries.set(i, s), s.listeners.push(e), 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                e.ro(n.onlineState), s.so && e.oo(s.so) && js(n), [ 2 /*return*/ ];
            }
        }));
    }));
}

function qs(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o, s, a;
        return r(this, (function(r) {
            return n = Q(t), i = e.query, o = !1, (s = n.queries.get(i)) && (a = s.listeners.indexOf(e)) >= 0 && (s.listeners.splice(a, 1), 
            o = 0 === s.listeners.length), o ? [ 2 /*return*/ , (n.queries.delete(i), n.onUnlisten(i)) ] : [ 2 /*return*/ ];
        }));
    }));
}

function Us(t, e) {
    for (var n = Q(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var s = o[i], a = s.query, u = n.queries.get(a);
        if (u) {
            for (var c = 0, h = u.listeners; c < h.length; c++) {
                h[c].oo(s) && (r = !0);
            }
            u.so = s;
        }
    }
    r && js(n);
}

function Bs(t, e, n) {
    var r = Q(t), i = r.queries.get(e);
    if (i) for (var o = 0, s = i.listeners; o < s.length; o++) {
        s[o].onError(n);
    }
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        r.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function js(t) {
    t.io.forEach((function(t) {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ var Ks = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.ao = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.co = !1, this.uo = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.oo = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new Ps(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.co ? this.ho(t) && (this.ao.next(t), o = !0) : this.lo(t, this.onlineState) && (this.fo(t), 
        o = !0), this.uo = t, o;
    }, t.prototype.onError = function(t) {
        this.ao.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.ro = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.uo && !this.co && this.lo(this.uo, t) && (this.fo(this.uo), e = !0), 
        e;
    }, t.prototype.lo = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.wo && n || t.docs.isEmpty() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.ho = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.uo && this.uo.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.fo = function(t) {
        t = Ps.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.co = !0, 
        this.ao.next(t);
    }, t;
}(), Gs = /** @class */ function() {
    function t(t, 
    // How many bytes this element takes to store in the bundle.
    e) {
        this.payload = t, this.byteLength = e;
    }
    return t.prototype._o = function() {
        return "metadata" in this.payload;
    }, t;
}(), zs = /** @class */ function() {
    function t(t) {
        this.k = t;
    }
    return t.prototype.Hn = function(t) {
        return Zn(this.k, t);
    }, 
    /**
     * Converts a BundleDocument to a MutableDocument.
     */
    t.prototype.Jn = function(t) {
        return t.metadata.exists ? ir(this.k, t.document, !1) : Jt.newNoDocument(this.Hn(t.metadata.name), this.Yn(t.metadata.readTime));
    }, t.prototype.Yn = function(t) {
        return Hn(t);
    }, t;
}(), Qs = /** @class */ function() {
    function t(t, e, n) {
        this.mo = t, this.localStore = e, this.k = n, 
        /** Batched queries to be saved into storage */
        this.queries = [], 
        /** Batched documents to be saved into storage */
        this.documents = [], this.progress = Ws(t)
        /**
     * Adds an element from the bundle to the loader.
     *
     * Returns a new progress if adding the element leads to a new progress,
     * otherwise returns null.
     */;
    }
    return t.prototype.yo = function(t) {
        this.progress.bytesLoaded += t.byteLength;
        var e = this.progress.documentsLoaded;
        return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
            metadata: t.payload.documentMetadata
        }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, 
        ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, 
        Object.assign({}, this.progress)) : null;
    }, t.prototype.po = function(t) {
        for (var e = new Map, n = new zs(this.k), r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            if (o.metadata.queries) for (var s = n.Hn(o.metadata.name), a = 0, u = o.metadata.queries; a < u.length; a++) {
                var c = u[a], h = (e.get(c) || Cn()).add(s);
                e.set(c, h);
            }
        }
        return e;
    }, 
    /**
     * Update the progress to 'Success' and return the updated progress.
     */
    t.prototype.complete = function() {
        return n(this, void 0, void 0, (function() {
            var t, e, n, i, o;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4 /*yield*/ , Eo(this.localStore, new zs(this.k), this.documents, this.mo.id) ];

                  case 1:
                    t = r.sent(), e = this.po(this.documents), n = 0, i = this.queries, r.label = 2;

                  case 2:
                    return n < i.length ? (o = i[n], [ 4 /*yield*/ , So(this.localStore, o, e.get(o.name)) ]) : [ 3 /*break*/ , 5 ];

                  case 3:
                    r.sent(), r.label = 4;

                  case 4:
                    return n++, [ 3 /*break*/ , 2 ];

                  case 5:
                    return [ 2 /*return*/ , (this.progress.taskState = "Success", new io(Object.assign({}, this.progress), t)) ];
                }
            }));
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */
/**
 * Returns a `LoadBundleTaskProgress` representing the initial progress of
 * loading a bundle.
 */
function Ws(t) {
    return {
        taskState: "Running",
        documentsLoaded: 0,
        bytesLoaded: 0,
        totalDocuments: t.totalDocuments,
        totalBytes: t.totalBytes
    };
}

/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Hs = function(t) {
    this.key = t;
}, Ys = function(t) {
    this.key = t;
}, Js = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.To = e, this.Eo = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.current = !1, 
        /** Documents in the view but not in the remote target */
        this.Io = Cn(), 
        /** Document Keys that have local changes */
        this.mutatedKeys = Cn(), this.Ao = Re(t), this.Ro = new Ls(this.Ao);
    }
    return Object.defineProperty(t.prototype, "Po", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.To;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */
    t.prototype.bo = function(t, e) {
        var n = this, r = e ? e.vo : new Os, i = e ? e.Ro : this.Ro, o = e ? e.mutatedKeys : this.mutatedKeys, s = i, a = !1, u = be(this.query) && i.size === this.query.limit ? i.last() : null, c = Ie(this.query) && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.inorderTraversal((function(t, e) {
            var h = i.get(t), f = xe(n.query, e) ? e : null, l = !!h && n.mutatedKeys.has(h.key), d = !!f && (f.hasLocalMutations || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.mutatedKeys.has(f.key) && f.hasCommittedMutations), p = !1;
            // Calculate change
            h && f ? h.data.isEqual(f.data) ? l !== d && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), p = !0) : n.Vo(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), p = !0, (u && n.Ao(f, u) > 0 || c && n.Ao(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            a = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), p = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), p = !0, (u || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            a = !0)), p && (f ? (s = s.add(f), o = d ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), be(this.query) || Ie(this.query)) for (;s.size > this.query.limit; ) {
            var h = be(this.query) ? s.last() : s.first();
            s = s.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            Ro: s,
            vo: r,
            Bn: a,
            mutatedKeys: o
        };
    }, t.prototype.Vo = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.applyChanges = function(t, e, n) {
        var r = this, i = this.Ro;
        this.Ro = t.Ro, this.mutatedKeys = t.mutatedKeys;
        // Sort changes based on type and query comparator
        var o = t.vo.no();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return K();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.Ao(t.doc, e.doc);
        })), this.So(n);
        var s = e ? this.Do() : [], a = 0 === this.Io.size && this.current ? 1 /* Synced */ : 0 /* Local */ , u = a !== this.Eo;
        return this.Eo = a, 0 !== o.length || u ? {
            snapshot: new Ps(this.query, t.Ro, i, o, t.mutatedKeys, 0 /* Local */ === a, u, 
            /* excludesMetadataChanges= */ !1),
            Co: s
        } : {
            Co: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.ro = function(t) {
        return this.current && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.current = !1, this.applyChanges({
            Ro: this.Ro,
            vo: new Os,
            mutatedKeys: this.mutatedKeys,
            Bn: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Co: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.No = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.To.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.Ro.has(t) && !this.Ro.get(t).hasLocalMutations;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.So = function(t) {
        var e = this;
        t && (t.addedDocuments.forEach((function(t) {
            return e.To = e.To.add(t);
        })), t.modifiedDocuments.forEach((function(t) {})), t.removedDocuments.forEach((function(t) {
            return e.To = e.To.delete(t);
        })), this.current = t.current);
    }, t.prototype.Do = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.current) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.Io;
        this.Io = Cn(), this.Ro.forEach((function(e) {
            t.No(e.key) && (t.Io = t.Io.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.Io.has(e) || n.push(new Ys(e));
        })), this.Io.forEach((function(t) {
            e.has(t) || n.push(new Hs(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.ko = function(t) {
        this.To = t.zn, this.Io = Cn();
        var e = this.bo(t.documents);
        return this.applyChanges(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.xo = function() {
        return Ps.fromInitialDocuments(this.query, this.Ro, this.mutatedKeys, 0 /* Local */ === this.Eo);
    }, t;
}(), Xs = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, Zs = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.$o = !1;
}, $s = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = r, 
        this.currentUser = i, this.maxConcurrentLimboResolutions = o, this.Fo = {}, this.Oo = new Gi((function(t) {
            return Ne(t);
        }), De), this.Mo = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query. The strings in this set are the result of calling
             * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
             *
             * The `Set` type was chosen because it provides efficient lookup and removal
             * of arbitrary elements and it also maintains insertion order, providing the
             * desired queue-like FIFO semantics.
             */
        this.Lo = new Set, 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Bo = new gn(Lt.comparator), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Uo = new Map, this.qo = new ko, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Ko = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.jo = new Map, this.Qo = Ri.re(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Wo = void 0;
    }
    return Object.defineProperty(t.prototype, "isPrimaryClient", {
        get: function() {
            return !0 === this.Wo;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}();

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
function ta(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o, s, a, u;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return n = Na(t), (s = n.Oo.get(e)) ? (
                // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                i = s.targetId, n.sharedClientState.addLocalQueryTarget(i), o = s.view.xo(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                return [ 4 /*yield*/ , mo(n.localStore, ke(e)) ];

              case 2:
                return a = r.sent(), u = n.sharedClientState.addLocalQueryTarget(a.targetId), i = a.targetId, 
                [ 4 /*yield*/ , ea(n, e, i, "current" === u) ];

              case 3:
                o = r.sent(), n.isPrimaryClient && us(n.remoteStore, a), r.label = 4;

              case 4:
                return [ 2 /*return*/ , o ];
            }
        }));
    }));
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ function ea(t, e, i, o) {
    return n(this, void 0, void 0, (function() {
        var s, a, u, c, h, f;
        return r(this, (function(l) {
            switch (l.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return t.Go = function(e, i, o) {
                    return function(t, e, i, o) {
                        return n(this, void 0, void 0, (function() {
                            var n, s, a;
                            return r(this, (function(r) {
                                switch (r.label) {
                                  case 0:
                                    return n = e.view.bo(i), n.Bn ? [ 4 /*yield*/ , wo(t.localStore, e.query, 
                                    /* usePreviousResults= */ !1).then((function(t) {
                                        var r = t.documents;
                                        return e.view.bo(r, n);
                                    })) ] : [ 3 /*break*/ , 2 ];

                                  case 1:
                                    // The query has a limit and some docs were removed, so we need
                                    // to re-run the query against the local store to make sure we
                                    // didn't lose any good docs that had been past the limit.
                                    n = r.sent(), r.label = 2;

                                  case 2:
                                    return s = o && o.targetChanges.get(e.targetId), a = e.view.applyChanges(n, 
                                    /* updateLimboDocuments= */ t.isPrimaryClient, s), [ 2 /*return*/ , (pa(t, e.targetId, a.Co), 
                                    a.snapshot) ];
                                }
                            }));
                        }));
                    }(t, e, i, o);
                }, [ 4 /*yield*/ , wo(t.localStore, e, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return s = l.sent(), a = new Js(e, s.zn), u = a.bo(s.documents), c = On.createSynthesizedTargetChangeForCurrentChange(i, o && "Offline" /* Offline */ !== t.onlineState), 
                h = a.applyChanges(u, 
                /* updateLimboDocuments= */ t.isPrimaryClient, c), pa(t, i, h.Co), f = new Xs(e, i, a), 
                [ 2 /*return*/ , (t.Oo.set(e, f), t.Mo.has(i) ? t.Mo.get(i).push(e) : t.Mo.set(i, [ e ]), 
                h.snapshot) ];
            }
        }));
    }));
}

/** Stops listening to the query. */ function na(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return n = Q(t), i = n.Oo.get(e), (o = n.Mo.get(i.targetId)).length > 1 ? [ 2 /*return*/ , (n.Mo.set(i.targetId, o.filter((function(t) {
                    return !De(t, e);
                }))), void n.Oo.delete(e)) ] : n.isPrimaryClient ? (
                // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                n.sharedClientState.removeLocalQueryTarget(i.targetId), n.sharedClientState.isActiveQueryTarget(i.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , go(n.localStore, i.targetId, 
                /*keepPersistedTargetData=*/ !1).then((function() {
                    n.sharedClientState.clearQueryState(i.targetId), cs(n.remoteStore, i.targetId), 
                    la(n, i.targetId);
                })).catch(Mi) ]) : [ 3 /*break*/ , 3 ];

              case 1:
                r.sent(), r.label = 2;

              case 2:
                return [ 3 /*break*/ , 5 ];

              case 3:
                return la(n, i.targetId), [ 4 /*yield*/ , go(n.localStore, i.targetId, 
                /*keepPersistedTargetData=*/ !0) ];

              case 4:
                r.sent(), r.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ function ra(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var n, o, s, a;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                n = Ca(t), r.label = 1;

              case 1:
                return r.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n, r = Q(t), i = ft.now(), o = e.reduce((function(t, e) {
                        return t.add(e.key);
                    }), Cn());
                    return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                        return r.Wn.vn(t, o).next((function(o) {
                            n = o;
                            for (
                            // For non-idempotent mutations (such as `FieldValue.increment()`),
                            // we record the base state in a separate patch mutation. This is
                            // later used to guarantee consistent values and prevents flicker
                            // even if the backend sends us an update that already includes our
                            // transform.
                            var s = [], a = 0, u = e; a < u.length; a++) {
                                var c = u[a], h = nn(c, n.get(c.key));
                                null != h && 
                                // NOTE: The base state should only be applied if there's some
                                // existing document to override, so use a Precondition of
                                // exists=true
                                s.push(new an(c.key, h, Yt(h.value.mapValue), Xe.exists(!0)));
                            }
                            return r.An.addMutationBatch(t, i, s, e);
                        }));
                    })).then((function(t) {
                        return t.applyToLocalDocumentSet(n), {
                            batchId: t.batchId,
                            changes: n
                        };
                    }));
                }(n.localStore, e) ];

              case 2:
                return o = r.sent(), n.sharedClientState.addPendingMutation(o.batchId), function(t, e, n) {
                    var r = t.Ko[t.currentUser.toKey()];
                    r || (r = new gn(ut)), r = r.insert(e, n), t.Ko[t.currentUser.toKey()] = r;
                }(n, o.batchId, i), [ 4 /*yield*/ , ma(n, o.changes) ];

              case 3:
                return r.sent(), [ 4 /*yield*/ , Is(n.remoteStore) ];

              case 4:
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 5:
                return s = r.sent(), a = Rs(s, "Failed to persist write"), i.reject(a), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ function ia(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                n = Q(t), r.label = 1;

              case 1:
                return r.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , po(n.localStore, e) ];

              case 2:
                return i = r.sent(), 
                // Update `receivedDocument` as appropriate for any limbo targets.
                e.targetChanges.forEach((function(t, e) {
                    var r = n.Uo.get(e);
                    r && (
                    // Since this is a limbo resolution lookup, it's for a single document
                    // and it could be added, modified, or removed, but not a combination.
                    G(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), 
                    t.addedDocuments.size > 0 ? r.$o = !0 : t.modifiedDocuments.size > 0 ? G(r.$o) : t.removedDocuments.size > 0 && (G(r.$o), 
                    r.$o = !1));
                })), [ 4 /*yield*/ , ma(n, i, e) ];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Mi(r.sent()) ];

              case 5:
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function oa(t, e, n) {
    var r = Q(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (r.isPrimaryClient && 0 /* RemoteStore */ === n || !r.isPrimaryClient && 1 /* SharedClientState */ === n) {
        var i = [];
        r.Oo.forEach((function(t, n) {
            var r = n.view.ro(e);
            r.snapshot && i.push(r.snapshot);
        })), function(t, e) {
            var n = Q(t);
            n.onlineState = e;
            var r = !1;
            n.queries.forEach((function(t, n) {
                for (var i = 0, o = n.listeners; i < o.length; i++) {
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    o[i].ro(e) && (r = !0);
                }
            })), r && js(n);
        }(r.eventManager, e), i.length && r.Fo.Pr(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ function sa(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var n, o, s, a, u, c;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (n = Q(t)).sharedClientState.updateQueryState(e, "rejected", i), o = n.Uo.get(e), 
                (s = o && o.key) ? (a = (a = new gn(Lt.comparator)).insert(s, Jt.newNoDocument(s, lt.min())), 
                u = Cn().add(s), c = new Ln(lt.min(), 
                /* targetChanges= */ new Map, 
                /* targetMismatches= */ new In(ut), a, u), [ 4 /*yield*/ , ia(n, c) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return r.sent(), 
                // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                n.Bo = n.Bo.remove(s), n.Uo.delete(e), va(n), [ 3 /*break*/ , 4 ];

              case 2:
                return [ 4 /*yield*/ , go(n.localStore, e, 
                /* keepPersistedTargetData */ !1).then((function() {
                    return la(n, e, i);
                })).catch(Mi) ];

              case 3:
                r.sent(), r.label = 4;

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function aa(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                n = Q(t), i = e.batch.batchId, r.label = 1;

              case 1:
                return r.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , fo(n.localStore, e) ];

              case 2:
                return o = r.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                fa(n, i, /*error=*/ null), ha(n, i), n.sharedClientState.updateMutationState(i, "acknowledged"), 
                [ 4 /*yield*/ , ma(n, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Mi(r.sent()) ];

              case 5:
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function ua(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var n, o;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                n = Q(t), r.label = 1;

              case 1:
                return r.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n = Q(t);
                    return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                        var r;
                        return n.An.lookupMutationBatch(t, e).next((function(e) {
                            return G(null !== e), r = e.keys(), n.An.removeMutationBatch(t, e);
                        })).next((function() {
                            return n.An.performConsistencyCheck(t);
                        })).next((function() {
                            return n.Wn.vn(t, r);
                        }));
                    }));
                }(n.localStore, e) ];

              case 2:
                return o = r.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                fa(n, e, i), ha(n, e), n.sharedClientState.updateMutationState(e, "rejected", i), 
                [ 4 /*yield*/ , ma(n, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Mi(r.sent()) ];

              case 5:
                return r.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ function ca(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o, s, a;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                ps((n = Q(t)).remoteStore) || q("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                r.label = 1;

              case 1:
                return r.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                    var e = Q(t);
                    return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                        return e.An.getHighestUnacknowledgedBatchId(t);
                    }));
                }(n.localStore) ];

              case 2:
                return -1 === (i = r.sent()) ? [ 2 /*return*/ , void e.resolve() ] : ((o = n.jo.get(i) || []).push(e), 
                n.jo.set(i, o), [ 3 /*break*/ , 4 ]);

              case 3:
                return s = r.sent(), a = Rs(s, "Initialization of waitForPendingWrites() operation failed"), 
                e.reject(a), [ 3 /*break*/ , 4 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function ha(t, e) {
    (t.jo.get(e) || []).forEach((function(t) {
        t.resolve();
    })), t.jo.delete(e)
    /** Reject all outstanding callbacks waiting for pending writes to complete. */;
}

function fa(t, e, n) {
    var r = Q(t), i = r.Ko[r.currentUser.toKey()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
    if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.Ko[r.currentUser.toKey()] = i;
    }
}

function la(t, e, n) {
    void 0 === n && (n = null), t.sharedClientState.removeLocalQueryTarget(e);
    for (var r = 0, i = t.Mo.get(e); r < i.length; r++) {
        var o = i[r];
        t.Oo.delete(o), n && t.Fo.zo(o, n);
    }
    t.Mo.delete(e), t.isPrimaryClient && t.qo.us(e).forEach((function(e) {
        t.qo.containsKey(e) || 
        // We removed the last reference for this key
        da(t, e);
    }));
}

function da(t, e) {
    t.Lo.delete(e.path.canonicalString());
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var n = t.Bo.get(e);
    null !== n && (cs(t.remoteStore, n), t.Bo = t.Bo.remove(e), t.Uo.delete(n), va(t));
}

function pa(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof Hs ? (t.qo.addReference(o.key, e), ya(t, o)) : o instanceof Ys ? (q("SyncEngine", "Document no longer in limbo: " + o.key), 
        t.qo.removeReference(o.key, e), t.qo.containsKey(o.key) || 
        // We removed the last reference for this key
        da(t, o.key)) : K();
    }
}

function ya(t, e) {
    var n = e.key, r = n.path.canonicalString();
    t.Bo.get(n) || t.Lo.has(r) || (q("SyncEngine", "New document in limbo: " + n), t.Lo.add(r), 
    va(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function va(t) {
    for (;t.Lo.size > 0 && t.Bo.size < t.maxConcurrentLimboResolutions; ) {
        var e = t.Lo.values().next().value;
        t.Lo.delete(e);
        var n = new Lt(mt.fromString(e)), r = t.Qo.next();
        t.Uo.set(r, new Zs(n)), t.Bo = t.Bo.insert(n, r), us(t.remoteStore, new ii(ke(we(n.path)), r, 2 /* LimboResolution */ , ot.I));
    }
}

function ma(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var o, s, a, u;
        return r(this, (function(c) {
            switch (c.label) {
              case 0:
                return o = Q(t), s = [], a = [], u = [], o.Oo.isEmpty() ? [ 3 /*break*/ , 3 ] : (o.Oo.forEach((function(t, n) {
                    u.push(o.Go(n, e, i).then((function(t) {
                        if (t) {
                            o.isPrimaryClient && o.sharedClientState.updateQueryState(n.targetId, t.fromCache ? "not-current" : "current"), 
                            s.push(t);
                            var e = so.$n(n.targetId, t);
                            a.push(e);
                        }
                    })));
                })), [ 4 /*yield*/ , Promise.all(u) ]);

              case 1:
                return c.sent(), o.Fo.Pr(s), [ 4 /*yield*/ , function(t, e) {
                    return n(this, void 0, void 0, (function() {
                        var n, i, o, s, a, u, c, h, f;
                        return r(this, (function(r) {
                            switch (r.label) {
                              case 0:
                                n = Q(t), r.label = 1;

                              case 1:
                                return r.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                    return Gr.forEach(e, (function(e) {
                                        return Gr.forEach(e.kn, (function(r) {
                                            return n.persistence.referenceDelegate.addReference(t, e.targetId, r);
                                        })).next((function() {
                                            return Gr.forEach(e.xn, (function(r) {
                                                return n.persistence.referenceDelegate.removeReference(t, e.targetId, r);
                                            }));
                                        }));
                                    }));
                                })) ];

                              case 2:
                                return r.sent(), [ 3 /*break*/ , 4 ];

                              case 3:
                                if (!Yr(i = r.sent())) throw i;
                                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                // number for the documents that were included in this transaction.
                                // This might trigger them to be deleted earlier than they otherwise
                                // would have, but it should not invalidate the integrity of the data.
                                                                return q("LocalStore", "Failed to update sequence numbers: " + i), 
                                [ 3 /*break*/ , 4 ];

                              case 4:
                                for (o = 0, s = e; o < s.length; o++) a = s[o], u = a.targetId, a.fromCache || (c = n.qn.get(u), 
                                h = c.snapshotVersion, f = c.withLastLimboFreeSnapshotVersion(h), 
                                // Advance the last limbo free snapshot version
                                n.qn = n.qn.insert(u, f));
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(o.localStore, a) ];

              case 2:
                c.sent(), c.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function ga(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return (n = Q(t)).currentUser.isEqual(e) ? [ 3 /*break*/ , 3 ] : (q("SyncEngine", "User change. New user:", e.toKey()), 
                [ 4 /*yield*/ , ho(n.localStore, e) ]);

              case 1:
                return i = r.sent(), n.currentUser = e, 
                // Fails tasks waiting for pending writes requested by previous user.
                function(t, e) {
                    t.jo.forEach((function(t) {
                        t.forEach((function(t) {
                            t.reject(new H(W.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                        }));
                    })), t.jo.clear();
                }(n), 
                // TODO(b/114226417): Consider calling this only in the primary tab.
                n.sharedClientState.handleUserChange(e, i.removedBatchIds, i.addedBatchIds), [ 4 /*yield*/ , ma(n, i.Gn) ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function wa(t, e) {
    var n = Q(t), r = n.Uo.get(e);
    if (r && r.$o) return Cn().add(r.key);
    var i = Cn(), o = n.Mo.get(e);
    if (!o) return i;
    for (var s = 0, a = o; s < a.length; s++) {
        var u = a[s], c = n.Oo.get(u);
        i = i.unionWith(c.view.Po);
    }
    return i;
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ function ba(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return [ 4 /*yield*/ , wo((n = Q(t)).localStore, e.query, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return i = r.sent(), o = e.view.ko(i), [ 2 /*return*/ , (n.isPrimaryClient && pa(n, e.targetId, o.Co), 
                o) ];
            }
        }));
    }));
}

/**
 * Retrieves newly changed documents from remote document cache and raises
 * snapshots if needed.
 */
// PORTING NOTE: Multi-Tab only.
function Ia(t) {
    return n(this, void 0, void 0, (function() {
        var e;
        return r(this, (function(n) {
            return [ 2 /*return*/ , Io((e = Q(t)).localStore).then((function(t) {
                return ma(e, t);
            })) ];
        }));
    }));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
function Ta(t, e, i, o) {
    return n(this, void 0, void 0, (function() {
        var n, s;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return [ 4 /*yield*/ , function(t, e) {
                    var n = Q(t), r = Q(n.An);
                    return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                        return r.Zt(t, e).next((function(e) {
                            return e ? n.Wn.vn(t, e) : Gr.resolve(null);
                        }));
                    }));
                }((n = Q(t)).localStore, e) ];

              case 1:
                return null === (s = r.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== i ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , Is(n.remoteStore) ];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return r.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                "acknowledged" === i || "rejected" === i ? (
                // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                fa(n, e, o || null), ha(n, e), function(t, e) {
                    Q(Q(t).An).ee(e);
                }(n.localStore, e)) : K(), r.label = 4;

              case 4:
                return [ 4 /*yield*/ , ma(n, s) ];

              case 5:
                return r.sent(), [ 3 /*break*/ , 7 ];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                q("SyncEngine", "Cannot apply mutation batch with id: " + e), r.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function Ea(t, e) {
    return n(this, void 0, void 0, (function() {
        var n, i, o, s, a, u, c, h;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return Na(n = Q(t)), Ca(n), !0 !== e || !0 === n.Wo ? [ 3 /*break*/ , 3 ] : (i = n.sharedClientState.getAllActiveQueryTargets(), 
                [ 4 /*yield*/ , Sa(n, i.toArray()) ]);

              case 1:
                return o = r.sent(), n.Wo = !0, [ 4 /*yield*/ , Ds(n.remoteStore, !0) ];

              case 2:
                for (r.sent(), s = 0, a = o; s < a.length; s++) u = a[s], us(n.remoteStore, u);
                return [ 3 /*break*/ , 7 ];

              case 3:
                return !1 !== e || !1 === n.Wo ? [ 3 /*break*/ , 7 ] : (c = [], h = Promise.resolve(), 
                n.Mo.forEach((function(t, e) {
                    n.sharedClientState.isLocalQueryTarget(e) ? c.push(e) : h = h.then((function() {
                        return la(n, e), go(n.localStore, e, 
                        /*keepPersistedTargetData=*/ !0);
                    })), cs(n.remoteStore, e);
                })), [ 4 /*yield*/ , h ]);

              case 4:
                return r.sent(), [ 4 /*yield*/ , Sa(n, c) ];

              case 5:
                return r.sent(), 
                // PORTING NOTE: Multi-Tab only.
                function(t) {
                    var e = Q(t);
                    e.Uo.forEach((function(t, n) {
                        cs(e.remoteStore, n);
                    })), e.qo.hs(), e.Uo = new Map, e.Bo = new gn(Lt.comparator);
                }(n), n.Wo = !1, [ 4 /*yield*/ , Ds(n.remoteStore, !1) ];

              case 6:
                r.sent(), r.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Sa(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var n, i, o, s, a, u, c, h, f, l, d, p, y, v;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                n = Q(t), i = [], o = [], s = 0, a = e, r.label = 1;

              case 1:
                return s < a.length ? (u = a[s], c = void 0, (h = n.Mo.get(u)) && 0 !== h.length ? [ 4 /*yield*/ , mo(n.localStore, ke(h[0])) ] : [ 3 /*break*/ , 7 ]) : [ 3 /*break*/ , 13 ];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                c = r.sent(), f = 0, l = h, r.label = 3;

              case 3:
                return f < l.length ? (d = l[f], p = n.Oo.get(d), [ 4 /*yield*/ , ba(n, p) ]) : [ 3 /*break*/ , 6 ];

              case 4:
                (y = r.sent()).snapshot && o.push(y.snapshot), r.label = 5;

              case 5:
                return f++, [ 3 /*break*/ , 3 ];

              case 6:
                return [ 3 /*break*/ , 11 ];

              case 7:
                return [ 4 /*yield*/ , bo(n.localStore, u) ];

              case 8:
                return v = r.sent(), [ 4 /*yield*/ , mo(n.localStore, v) ];

              case 9:
                return c = r.sent(), [ 4 /*yield*/ , ea(n, _a(v), u, 
                /*current=*/ !1) ];

              case 10:
                r.sent(), r.label = 11;

              case 11:
                i.push(c), r.label = 12;

              case 12:
                return s++, [ 3 /*break*/ , 1 ];

              case 13:
                return [ 2 /*return*/ , (n.Fo.Pr(o), i) ];
            }
        }));
    }));
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function _a(t) {
    return ge(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function ka(t) {
    var e = Q(t);
    return Q(Q(e.localStore).persistence).Tn();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function Aa(t, e, i, o) {
    return n(this, void 0, void 0, (function() {
        var n, s, a;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return (n = Q(t)).Wo ? (
                // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                q("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                if (!n.Mo.has(e)) return [ 3 /*break*/ , 8 ];
                switch (i) {
                  case "current":
                  case "not-current":
                    return [ 3 /*break*/ , 2 ];

                  case "rejected":
                    return [ 3 /*break*/ , 5 ];
                }
                return [ 3 /*break*/ , 7 ];

              case 2:
                return [ 4 /*yield*/ , Io(n.localStore) ];

              case 3:
                return s = r.sent(), a = Ln.createSynthesizedRemoteEventForCurrentChange(e, "current" === i), 
                [ 4 /*yield*/ , ma(n, s, a) ];

              case 4:
                return r.sent(), [ 3 /*break*/ , 8 ];

              case 5:
                return [ 4 /*yield*/ , go(n.localStore, e, 
                /* keepPersistedTargetData */ !0) ];

              case 6:
                return r.sent(), la(n, e, o), [ 3 /*break*/ , 8 ];

              case 7:
                K(), r.label = 8;

              case 8:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Adds or removes Watch targets for queries from different tabs. */ function Da(t, e, i) {
    return n(this, void 0, void 0, (function() {
        var n, o, s, a, u, c, h, f, l, d;
        return r(this, (function(p) {
            switch (p.label) {
              case 0:
                if (!(n = Na(t)).Wo) return [ 3 /*break*/ , 10 ];
                o = 0, s = e, p.label = 1;

              case 1:
                return o < s.length ? (a = s[o], n.Mo.has(a) ? (
                // A target might have been added in a previous attempt
                q("SyncEngine", "Adding an already active target " + a), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , bo(n.localStore, a) ]) : [ 3 /*break*/ , 6 ];

              case 2:
                return u = p.sent(), [ 4 /*yield*/ , mo(n.localStore, u) ];

              case 3:
                return c = p.sent(), [ 4 /*yield*/ , ea(n, _a(u), c.targetId, 
                /*current=*/ !1) ];

              case 4:
                p.sent(), us(n.remoteStore, c), p.label = 5;

              case 5:
                return o++, [ 3 /*break*/ , 1 ];

              case 6:
                h = function(t) {
                    return r(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return n.Mo.has(t) ? [ 4 /*yield*/ , go(n.localStore, t, 
                            /* keepPersistedTargetData */ !1).then((function() {
                                cs(n.remoteStore, t), la(n, t);
                            })).catch(Mi) ] : [ 3 /*break*/ , 2 ];

                            // Release queries that are still active.
                                                      case 1:
                            // Release queries that are still active.
                            e.sent(), e.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }, f = 0, l = i, p.label = 7;

              case 7:
                return f < l.length ? (d = l[f], [ 5 /*yield**/ , h(d) ]) : [ 3 /*break*/ , 10 ];

              case 8:
                p.sent(), p.label = 9;

              case 9:
                return f++, [ 3 /*break*/ , 7 ];

              case 10:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Na(t) {
    var e = Q(t);
    return e.remoteStore.remoteSyncer.applyRemoteEvent = ia.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = wa.bind(null, e), 
    e.remoteStore.remoteSyncer.rejectListen = sa.bind(null, e), e.Fo.Pr = Us.bind(null, e.eventManager), 
    e.Fo.zo = Bs.bind(null, e.eventManager), e;
}

function Ca(t) {
    var e = Q(t);
    return e.remoteStore.remoteSyncer.applySuccessfulWrite = aa.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = ua.bind(null, e), 
    e
    /**
 * Loads a Firestore bundle into the SDK. The returned promise resolves when
 * the bundle finished loading.
 *
 * @param syncEngine - SyncEngine to use.
 * @param bundleReader - Bundle to load into the SDK.
 * @param task - LoadBundleTask used to update the loading progress to public API.
 */;
}

function xa(t, e, i) {
    var o = Q(t);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (function(t, e, i) {
        return n(this, void 0, void 0, (function() {
            var n, o, s, a, u, c;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return r.trys.push([ 0, 14, , 15 ]), [ 4 /*yield*/ , e.getMetadata() ];

                  case 1:
                    return n = r.sent(), [ 4 /*yield*/ , function(t, e) {
                        var n = Q(t), r = Hn(e.createTime);
                        return n.persistence.runTransaction("hasNewerBundle", "readonly", (function(t) {
                            return n.Ye.getBundleMetadata(t, e.id);
                        })).then((function(t) {
                            return !!t && t.createTime.compareTo(r) >= 0;
                        }));
                    }(t.localStore, n) ];

                  case 2:
                    return r.sent() ? [ 4 /*yield*/ , e.close() ] : [ 3 /*break*/ , 4 ];

                  case 3:
                    return [ 2 /*return*/ , (r.sent(), void i._completeWith(function(t) {
                        return {
                            taskState: "Success",
                            documentsLoaded: t.totalDocuments,
                            bytesLoaded: t.totalBytes,
                            totalDocuments: t.totalDocuments,
                            totalBytes: t.totalBytes
                        };
                    }(n))) ];

                  case 4:
                    return i._updateProgress(Ws(n)), o = new Qs(n, t.localStore, e.k), [ 4 /*yield*/ , e.Ho() ];

                  case 5:
                    s = r.sent(), r.label = 6;

                  case 6:
                    return s ? [ 4 /*yield*/ , o.yo(s) ] : [ 3 /*break*/ , 10 ];

                  case 7:
                    return (a = r.sent()) && i._updateProgress(a), [ 4 /*yield*/ , e.Ho() ];

                  case 8:
                    s = r.sent(), r.label = 9;

                  case 9:
                    return [ 3 /*break*/ , 6 ];

                  case 10:
                    return [ 4 /*yield*/ , o.complete() ];

                  case 11:
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    return u = r.sent(), [ 4 /*yield*/ , ma(t, u.In, 
                    /* remoteEvent */ void 0) ];

                  case 12:
                    // Save metadata, so loading the same bundle will skip.
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    return r.sent(), [ 4 /*yield*/ , function(t, e) {
                        var n = Q(t);
                        return n.persistence.runTransaction("Save bundle", "readwrite", (function(t) {
                            return n.Ye.saveBundleMetadata(t, e);
                        }));
                    }(t.localStore, n) ];

                  case 13:
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    // Save metadata, so loading the same bundle will skip.
                    return r.sent(), i._completeWith(u.progress), [ 3 /*break*/ , 15 ];

                  case 14:
                    return B("SyncEngine", "Loading bundle failed with " + (c = r.sent())), i._failWith(c), 
                    [ 3 /*break*/ , 15 ];

                  case 15:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */)(o, e, i).then((function() {
        o.sharedClientState.notifyBundleLoaded();
    }));
}

var Ra = /** @class */ function() {
    function t() {
        this.synchronizeTabs = !1;
    }
    return t.prototype.initialize = function(t) {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.k = Zo(t.databaseInfo.databaseId), this.sharedClientState = this.Jo(t), 
                    this.persistence = this.Yo(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.gcScheduler = this.Xo(t), this.localStore = this.Zo(t), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Xo = function(t) {
        return null;
    }, t.prototype.Zo = function(t) {
        return co(this.persistence, new ao, t.initialUser, this.k);
    }, t.prototype.Yo = function(t) {
        return new Ro(Oo.ks, this.k);
    }, t.prototype.Jo = function(t) {
        return new Go;
    }, t.prototype.terminate = function() {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.gcScheduler && this.gcScheduler.stop(), [ 4 /*yield*/ , this.sharedClientState.shutdown() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.shutdown() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), La = /** @class */ function(e) {
    function i(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).ta = t, i.cacheSizeBytes = n, i.forceOwnership = r, 
        i.synchronizeTabs = !1, i;
    }
    return t(i, e), i.prototype.initialize = function(t) {
        return n(this, void 0, void 0, (function() {
            var n = this;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4 /*yield*/ , e.prototype.initialize.call(this, t) ];

                  case 1:
                    return r.sent(), [ 4 /*yield*/ , To(this.localStore) ];

                  case 2:
                    return r.sent(), [ 4 /*yield*/ , this.ta.initialize(this, t) ];

                  case 3:
                    // Enqueue writes from a previous session
                    return r.sent(), [ 4 /*yield*/ , Ca(this.ta.syncEngine) ];

                  case 4:
                    // Enqueue writes from a previous session
                    return r.sent(), [ 4 /*yield*/ , Is(this.ta.remoteStore) ];

                  case 5:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return r.sent(), [ 4 /*yield*/ , this.persistence.sn((function() {
                        return n.gcScheduler && !n.gcScheduler.started && n.gcScheduler.start(n.localStore), 
                        Promise.resolve();
                    })) ];

                  case 6:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return r.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, i.prototype.Zo = function(t) {
        return co(this.persistence, new ao, t.initialUser, this.k);
    }, i.prototype.Xo = function(t) {
        var e = this.persistence.referenceDelegate.garbageCollector;
        return new Ui(e, t.asyncQueue);
    }, i.prototype.Yo = function(t) {
        var e = ro(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? Si.withCacheSize(this.cacheSizeBytes) : Si.DEFAULT;
        return new to(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, Jo(), Xo(), this.k, this.sharedClientState, !!this.forceOwnership);
    }, i.prototype.Jo = function(t) {
        return new Go;
    }, i;
}(Ra), Oa = /** @class */ function(e) {
    function i(t, n) {
        var r = this;
        return (r = e.call(this, t, n, /* forceOwnership= */ !1) || this).ta = t, r.cacheSizeBytes = n, 
        r.synchronizeTabs = !0, r;
    }
    return t(i, e), i.prototype.initialize = function(t) {
        return n(this, void 0, void 0, (function() {
            var i, o = this;
            return r(this, (function(s) {
                switch (s.label) {
                  case 0:
                    return [ 4 /*yield*/ , e.prototype.initialize.call(this, t) ];

                  case 1:
                    return s.sent(), i = this.ta.syncEngine, this.sharedClientState instanceof Ko ? (this.sharedClientState.syncEngine = {
                        mi: Ta.bind(null, i),
                        gi: Aa.bind(null, i),
                        yi: Da.bind(null, i),
                        Tn: ka.bind(null, i),
                        _i: Ia.bind(null, i)
                    }, [ 4 /*yield*/ , this.sharedClientState.start() ]) : [ 3 /*break*/ , 3 ];

                  case 2:
                    s.sent(), s.label = 3;

                  case 3:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return [ 4 /*yield*/ , this.persistence.sn((function(t) {
                        return n(o, void 0, void 0, (function() {
                            return r(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , Ea(this.ta.syncEngine, t) ];

                                  case 1:
                                    return e.sent(), this.gcScheduler && (t && !this.gcScheduler.started ? this.gcScheduler.start(this.localStore) : t || this.gcScheduler.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return s.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, i.prototype.Jo = function(t) {
        var e = Jo();
        if (!Ko.bt(e)) throw new H(W.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        var n = ro(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
        return new Ko(e, t.asyncQueue, n, t.clientId, t.initialUser);
    }, i;
}(La), Pa = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, e) {
        return n(this, void 0, void 0, (function() {
            var n = this;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.localStore ? [ 3 /*break*/ , 2 ] : (this.localStore = t.localStore, 
                    this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(e), 
                    this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), 
                    this.syncEngine = this.createSyncEngine(e, 
                    /* startAsPrimary=*/ !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = function(t) {
                        return oa(n.syncEngine, t, 1 /* SharedClientState */);
                    }, this.remoteStore.remoteSyncer.handleCredentialChange = ga.bind(null, this.syncEngine), 
                    [ 4 /*yield*/ , Ds(this.remoteStore, this.syncEngine.isPrimaryClient) ]);

                  case 1:
                    r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.createEventManager = function(t) {
        return new Ms;
    }, t.prototype.createDatastore = function(t) {
        var e, n = Zo(t.databaseInfo.databaseId), r = (e = t.databaseInfo, new Yo(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n, r) {
            return new rs(t, e, n, r);
        }(t.authCredentials, t.appCheckCredentials, r, n);
    }, t.prototype.createRemoteStore = function(t) {
        var e, n, r, i, o, s = this;
        return e = this.localStore, n = this.datastore, r = t.asyncQueue, i = function(t) {
            return oa(s.syncEngine, t, 0 /* RemoteStore */);
        }, o = Qo.bt() ? new Qo : new zo, new os(e, n, r, i, o);
    }, t.prototype.createSyncEngine = function(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, s) {
            var a = new $s(t, e, n, r, i, o);
            return s && (a.Wo = !0), a;
        }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
    }, t.prototype.terminate = function() {
        return function(t) {
            return n(this, void 0, void 0, (function() {
                var e;
                return r(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = Q(t), q("RemoteStore", "RemoteStore shutting down."), e.Gr.add(5 /* Shutdown */), 
                        [ 4 /*yield*/ , as(e) ];

                      case 1:
                        return n.sent(), e.Hr.shutdown(), 
                        // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                        // triggering spurious listener events with cached data, etc.
                        e.Jr.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(this.remoteStore);
    }, t;
}();

/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * How many bytes to read each time when `ReadableStreamReader.read()` is
 * called. Only applicable for byte streams that we control (e.g. those backed
 * by an UInt8Array).
 */
/**
 * Builds a `ByteStreamReader` from a UInt8Array.
 * @param source - The data source to use.
 * @param bytesPerRead - How many bytes each `read()` from the returned reader
 *        will read.
 */
function Fa(t, e) {
    void 0 === e && (e = 10240);
    var i = 0;
    // The TypeScript definition for ReadableStreamReader changed. We use
    // `any` here to allow this code to compile with different versions.
    // See https://github.com/microsoft/TypeScript/issues/42970
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        read: function() {
            return n(this, void 0, void 0, (function() {
                var n;
                return r(this, (function(r) {
                    return i < t.byteLength ? (n = {
                        value: t.slice(i, i + e),
                        done: !1
                    }, [ 2 /*return*/ , (i += e, n) ]) : [ 2 /*return*/ , {
                        done: !0
                    } ];
                }));
            }));
        },
        cancel: function() {
            return n(this, void 0, void 0, (function() {
                return r(this, (function(t) {
                    return [ 2 /*return*/ ];
                }));
            }));
        },
        releaseLock: function() {},
        closed: Promise.reject("unimplemented")
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ var Ma = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.ea(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.ea(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.na = function() {
        this.muted = !0;
    }, t.prototype.ea = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}(), Va = /** @class */ function() {
    function t(
    /** The reader to read from underlying binary bundle data source. */
    t, e) {
        var n = this;
        this.sa = t, this.k = e, 
        /** Cached bundle metadata. */
        this.metadata = new Y, 
        /**
             * Internal buffer to hold bundle content, accumulating incomplete element
             * content.
             */
        this.buffer = new Uint8Array, this.ia = new TextDecoder("utf-8"), 
        // Read the metadata (which is the first element).
        this.ra().then((function(t) {
            t && t._o() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload)));
        }), (function(t) {
            return n.metadata.reject(t);
        }));
    }
    return t.prototype.close = function() {
        return this.sa.cancel();
    }, t.prototype.getMetadata = function() {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(t) {
                return [ 2 /*return*/ , this.metadata.promise ];
            }));
        }));
    }, t.prototype.Ho = function() {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.getMetadata() ];

                  case 1:
                    // Makes sure metadata is read before proceeding.
                    return [ 2 /*return*/ , (t.sent(), this.ra()) ];
                }
            }));
        }));
    }, 
    /**
     * Reads from the head of internal buffer, and pulling more data from
     * underlying stream if a complete element cannot be found, until an
     * element(including the prefixed length and the JSON string) is found.
     *
     * Once a complete element is read, it is dropped from internal buffer.
     *
     * Returns either the bundled element, or null if we have reached the end of
     * the stream.
     */
    t.prototype.ra = function() {
        return n(this, void 0, void 0, (function() {
            var t, e, n, i;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.oa() ];

                  case 1:
                    return null === (t = r.sent()) ? [ 2 /*return*/ , null ] : (e = this.ia.decode(t), 
                    n = Number(e), isNaN(n) && this.aa("length string (" + e + ") is not valid number"), 
                    [ 4 /*yield*/ , this.ca(n) ]);

                  case 2:
                    return i = r.sent(), [ 2 /*return*/ , new Gs(JSON.parse(i), t.length + n) ];
                }
            }));
        }));
    }, 
    /** First index of '{' from the underlying buffer. */ t.prototype.ua = function() {
        return this.buffer.findIndex((function(t) {
            return t === "{".charCodeAt(0);
        }));
    }, 
    /**
     * Reads from the beginning of the internal buffer, until the first '{', and
     * return the content.
     *
     * If reached end of the stream, returns a null.
     */
    t.prototype.oa = function() {
        return n(this, void 0, void 0, (function() {
            var t, e;
            return r(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.ua() < 0 ? [ 4 /*yield*/ , this.ha() ] : [ 3 /*break*/ , 3 ];

                  case 1:
                    if (n.sent()) return [ 3 /*break*/ , 3 ];
                    n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 0 ];

                  case 3:
                    // Broke out of the loop because underlying stream is closed, and there
                    // happens to be no more data to process.
                    return 0 === this.buffer.length ? [ 2 /*return*/ , null ] : (
                    // Broke out of the loop because underlying stream is closed, but still
                    // cannot find an open bracket.
                    (t = this.ua()) < 0 && this.aa("Reached the end of bundle when a length string is expected."), 
                    e = this.buffer.slice(0, t), [ 2 /*return*/ , (this.buffer = this.buffer.slice(t), 
                    e) ]);
                }
            }));
        }));
    }, 
    /**
     * Reads from a specified position from the internal buffer, for a specified
     * number of bytes, pulling more data from the underlying stream if needed.
     *
     * Returns a string decoded from the read bytes.
     */
    t.prototype.ca = function(t) {
        return n(this, void 0, void 0, (function() {
            var e;
            return r(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.buffer.length < t ? [ 4 /*yield*/ , this.ha() ] : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent() && this.aa("Reached the end of bundle when more is expected."), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 0 ];

                  case 3:
                    // Update the internal buffer to drop the read json string.
                    return e = this.ia.decode(this.buffer.slice(0, t)), [ 2 /*return*/ , (this.buffer = this.buffer.slice(t), 
                    e) ];
                }
            }));
        }));
    }, t.prototype.aa = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        throw this.sa.cancel(), new Error("Invalid bundle format: " + t);
    }, 
    /**
     * Pulls more data from underlying stream to internal buffer.
     * Returns a boolean indicating whether the stream is finished.
     */
    t.prototype.ha = function() {
        return n(this, void 0, void 0, (function() {
            var t, e;
            return r(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.sa.read() ];

                  case 1:
                    return (t = n.sent()).done || ((e = new Uint8Array(this.buffer.length + t.value.length)).set(this.buffer), 
                    e.set(t.value, this.buffer.length), this.buffer = e), [ 2 /*return*/ , t.done ];
                }
            }));
        }));
    }, t;
}(), qa = /** @class */ function() {
    function t(t) {
        this.datastore = t, 
        // The version of each document that was read during this transaction.
        this.readVersions = new Map, this.mutations = [], this.committed = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.lastWriteError = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.writtenDocs = new Set;
    }
    return t.prototype.lookup = function(t) {
        return n(this, void 0, void 0, (function() {
            var e, i = this;
            return r(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new H(W.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, e) {
                        return n(this, void 0, void 0, (function() {
                            var n, i, o, s, a, u;
                            return r(this, (function(r) {
                                switch (r.label) {
                                  case 0:
                                    return n = Q(t), i = er(n.k) + "/documents", o = {
                                        documents: e.map((function(t) {
                                            return Xn(n.k, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.ji("BatchGetDocuments", i, o) ];

                                  case 1:
                                    return s = r.sent(), a = new Map, s.forEach((function(t) {
                                        var e = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                G(!!e.found), e.found.name, e.found.updateTime;
                                                var n = Zn(t, e.found.name), r = Hn(e.found.updateTime), i = new Ht({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return Jt.newFoundDocument(n, r, i);
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                G(!!e.missing), G(!!e.readTime);
                                                var n = Zn(t, e.missing), r = Hn(e.readTime);
                                                return Jt.newNoDocument(n, r);
                                            }(t, e) : K();
                                        }(n.k, t);
                                        a.set(e.key.toString(), e);
                                    })), u = [], [ 2 /*return*/ , (e.forEach((function(t) {
                                        var e = a.get(t.toString());
                                        G(!!e), u.push(e);
                                    })), u) ];
                                }
                            }));
                        }));
                    }(this.datastore, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((e = o.sent()).forEach((function(t) {
                        return i.recordVersion(t);
                    })), e) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
        } catch (t) {
            this.lastWriteError = t;
        }
        this.writtenDocs.add(t.toString());
    }, t.prototype.delete = function(t) {
        this.write(new dn(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }, t.prototype.commit = function() {
        return n(this, void 0, void 0, (function() {
            var t, e = this;
            return r(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
                    return t = this.readVersions, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, n) {
                        var r = Lt.fromPath(n);
                        e.mutations.push(new pn(r, e.precondition(r)));
                    })), [ 4 /*yield*/ , function(t, e) {
                        return n(this, void 0, void 0, (function() {
                            var n, i, o;
                            return r(this, (function(r) {
                                switch (r.label) {
                                  case 0:
                                    return n = Q(t), i = er(n.k) + "/documents", o = {
                                        writes: e.map((function(t) {
                                            return or(n.k, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.Bi("Commit", i, o) ];

                                  case 1:
                                    return r.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.datastore, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return i.sent(), this.committed = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.recordVersion = function(t) {
        var e;
        if (t.isFoundDocument()) e = t.version; else {
            if (!t.isNoDocument()) throw K();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = lt.min();
        }
        var n = this.readVersions.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new H(W.ABORTED, "Document version changed between two reads.");
        } else this.readVersions.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.precondition = function(t) {
        var e = this.readVersions.get(t.toString());
        return !this.writtenDocs.has(t.toString()) && e ? Xe.updateTime(e) : Xe.none();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.preconditionForUpdate = function(t) {
        var e = this.readVersions.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(lt.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new H(W.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Xe.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return Xe.exists(!0);
    }, t.prototype.write = function(t) {
        this.ensureCommitNotCalled(), this.mutations.push(t);
    }, t.prototype.ensureCommitNotCalled = function() {}, t;
}(), Ua = /** @class */ function() {
    function t(t, e, n, r) {
        this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = r, 
        this.la = 5, this.ur = new $o(this.asyncQueue, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.la -= 1, this.fa();
    }, t.prototype.fa = function() {
        var t = this;
        this.ur.Zi((function() {
            return n(t, void 0, void 0, (function() {
                var t, e, n = this;
                return r(this, (function(r) {
                    return t = new qa(this.datastore), (e = this.da(t)) && e.then((function(e) {
                        n.asyncQueue.enqueueAndForget((function() {
                            return t.commit().then((function() {
                                n.deferred.resolve(e);
                            })).catch((function(t) {
                                n.wa(t);
                            }));
                        }));
                    })).catch((function(t) {
                        n.wa(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.da = function(t) {
        try {
            var e = this.updateFunction(t);
            return !Ct(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.deferred.reject(t), null;
        }
    }, t.prototype.wa = function(t) {
        var e = this;
        this.la > 0 && this._a(t) ? (this.la -= 1, this.asyncQueue.enqueueAndForget((function() {
            return e.fa(), Promise.resolve();
        }))) : this.deferred.reject(t);
    }, t.prototype._a = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !vn(e);
        }
        return !1;
    }, t;
}(), Ba = /** @class */ function() {
    function t(t, e, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    i, o) {
        var s = this;
        this.authCredentials = t, this.appCheckCredentials = e, this.asyncQueue = i, this.databaseInfo = o, 
        this.user = O.UNAUTHENTICATED, this.clientId = at.A(), this.authCredentialListener = function() {
            return Promise.resolve();
        }, this.authCredentials.start(i, (function(t) {
            return n(s, void 0, void 0, (function() {
                return r(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return q("FirestoreClient", "Received user=", t.uid), [ 4 /*yield*/ , this.authCredentialListener(t) ];

                      case 1:
                        return e.sent(), this.user = t, [ 2 /*return*/ ];
                    }
                }));
            }));
        })), 
        // Register an empty credentials change listener to activate token refresh.
        this.appCheckCredentials.start(i, (function() {
            return Promise.resolve();
        }));
    }
    return t.prototype.getConfiguration = function() {
        return n(this, void 0, void 0, (function() {
            return r(this, (function(t) {
                return [ 2 /*return*/ , {
                    asyncQueue: this.asyncQueue,
                    databaseInfo: this.databaseInfo,
                    clientId: this.clientId,
                    authCredentials: this.authCredentials,
                    appCheckCredentials: this.appCheckCredentials,
                    initialUser: this.user,
                    maxConcurrentLimboResolutions: 100
                } ];
            }));
        }));
    }, t.prototype.setCredentialChangeListener = function(t) {
        this.authCredentialListener = t;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.verifyNotTerminated = function() {
        if (this.asyncQueue.isShuttingDown) throw new H(W.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.terminate = function() {
        var t = this;
        this.asyncQueue.enterRestrictedMode();
        var e = new Y;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((function() {
            return n(t, void 0, void 0, (function() {
                var t, n;
                return r(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return r.trys.push([ 0, 5, , 6 ]), this.onlineComponents ? [ 4 /*yield*/ , this.onlineComponents.terminate() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        r.sent(), r.label = 2;

                      case 2:
                        return this.offlineComponents ? [ 4 /*yield*/ , this.offlineComponents.terminate() ] : [ 3 /*break*/ , 4 ];

                      case 3:
                        r.sent(), r.label = 4;

                      case 4:
                        // The credentials provider must be terminated after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving auth
                        // tokens.
                        return this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve(), 
                        [ 3 /*break*/ , 6 ];

                      case 5:
                        return t = r.sent(), n = Rs(t, "Failed to shutdown persistence"), e.reject(n), [ 3 /*break*/ , 6 ];

                      case 6:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), e.promise;
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class representing a bundle.
 *
 * Takes a bundle stream or buffer, and presents abstractions to read bundled
 * elements out of the underlying content.
 */ function ja(t, e) {
    return n(this, void 0, void 0, (function() {
        var i, o, s = this;
        return r(this, (function(a) {
            switch (a.label) {
              case 0:
                return t.asyncQueue.verifyOperationInProgress(), q("FirestoreClient", "Initializing OfflineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 1:
                return i = a.sent(), [ 4 /*yield*/ , e.initialize(i) ];

              case 2:
                return a.sent(), o = i.initialUser, t.setCredentialChangeListener((function(t) {
                    return n(s, void 0, void 0, (function() {
                        return r(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return o.isEqual(t) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , ho(e.localStore, t) ];

                              case 1:
                                n.sent(), o = t, n.label = 2;

                              case 2:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), 
                // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                e.persistence.setDatabaseDeletedListener((function() {
                    return t.terminate();
                })), t.offlineComponents = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ka(t, e) {
    return n(this, void 0, void 0, (function() {
        var i, o;
        return r(this, (function(s) {
            switch (s.label) {
              case 0:
                return t.asyncQueue.verifyOperationInProgress(), [ 4 /*yield*/ , Ga(t) ];

              case 1:
                return i = s.sent(), q("FirestoreClient", "Initializing OnlineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 2:
                return o = s.sent(), [ 4 /*yield*/ , e.initialize(i, o) ];

              case 3:
                return s.sent(), 
                // The CredentialChangeListener of the online component provider takes
                // precedence over the offline component provider.
                t.setCredentialChangeListener((function(t) {
                    return function(t, e) {
                        return n(this, void 0, void 0, (function() {
                            var n, i;
                            return r(this, (function(r) {
                                switch (r.label) {
                                  case 0:
                                    return (n = Q(t)).asyncQueue.verifyOperationInProgress(), q("RemoteStore", "RemoteStore received new credentials"), 
                                    i = ps(n), 
                                    // Tear down and re-create our network streams. This will ensure we get a
                                    // fresh auth token for the new user and re-fill the write pipeline with
                                    // new mutations from the LocalStore (since mutations are per-user).
                                    n.Gr.add(3 /* CredentialChange */), [ 4 /*yield*/ , as(n) ];

                                  case 1:
                                    return r.sent(), i && 
                                    // Don't set the network status to Unknown if we are offline.
                                    n.Jr.set("Unknown" /* Unknown */), [ 4 /*yield*/ , n.remoteSyncer.handleCredentialChange(e) ];

                                  case 2:
                                    return r.sent(), n.Gr.delete(3 /* CredentialChange */), [ 4 /*yield*/ , ss(n) ];

                                  case 3:
                                    // Tear down and re-create our network streams. This will ensure we get a
                                    // fresh auth token for the new user and re-fill the write pipeline with
                                    // new mutations from the LocalStore (since mutations are per-user).
                                    return r.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(e.remoteStore, t);
                })), t.onlineComponents = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ga(t) {
    return n(this, void 0, void 0, (function() {
        return r(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.offlineComponents ? [ 3 /*break*/ , 2 ] : (q("FirestoreClient", "Using default OfflineComponentProvider"), 
                [ 4 /*yield*/ , ja(t, new Ra) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.offlineComponents ];
            }
        }));
    }));
}

function za(t) {
    return n(this, void 0, void 0, (function() {
        return r(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.onlineComponents ? [ 3 /*break*/ , 2 ] : (q("FirestoreClient", "Using default OnlineComponentProvider"), 
                [ 4 /*yield*/ , Ka(t, new Pa) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.onlineComponents ];
            }
        }));
    }));
}

function Qa(t) {
    return Ga(t).then((function(t) {
        return t.persistence;
    }));
}

function Wa(t) {
    return Ga(t).then((function(t) {
        return t.localStore;
    }));
}

function Ha(t) {
    return za(t).then((function(t) {
        return t.remoteStore;
    }));
}

function Ya(t) {
    return za(t).then((function(t) {
        return t.syncEngine;
    }));
}

function Ja(t) {
    return n(this, void 0, void 0, (function() {
        var e, n;
        return r(this, (function(r) {
            switch (r.label) {
              case 0:
                return [ 4 /*yield*/ , za(t) ];

              case 1:
                return e = r.sent(), [ 2 /*return*/ , ((n = e.eventManager).onListen = ta.bind(null, e.syncEngine), 
                n.onUnlisten = na.bind(null, e.syncEngine), n) ];
            }
        }));
    }));
}

/** Enables the network connection and re-enqueues all pending operations. */ function Xa(t, e, i) {
    var o = this;
    void 0 === i && (i = {});
    var s = new Y;
    return t.asyncQueue.enqueueAndForget((function() {
        return n(o, void 0, void 0, (function() {
            var n;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return n = function(t, e, n, r, i) {
                        var o = new Ma({
                            next: function(o) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.enqueueAndForget((function() {
                                    return qs(t, s);
                                }));
                                var a = o.docs.has(n);
                                !a && o.fromCache ? 
                                // TODO(dimond): If we're online and the document doesn't
                                // exist then we resolve with a doc.exists set to false. If
                                // we're offline however, we reject the Promise in this
                                // case. Two options: 1) Cache the negative response from
                                // the server so we can deliver that even when you're
                                // offline 2) Actually reject the Promise in the online case
                                // if the document doesn't exist.
                                i.reject(new H(W.UNAVAILABLE, "Failed to get document because the client is offline.")) : a && o.fromCache && r && "server" === r.source ? i.reject(new H(W.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), s = new Ks(we(n.path), o, {
                            includeMetadataChanges: !0,
                            wo: !0
                        });
                        return Vs(t, s);
                    }, [ 4 /*yield*/ , Ja(t) ];

                  case 1:
                    return [ 2 /*return*/ , n.apply(void 0, [ r.sent(), t.asyncQueue, e, i, s ]) ];
                }
            }));
        }));
    })), s.promise;
}

function Za(t, e, i) {
    var o = this;
    void 0 === i && (i = {});
    var s = new Y;
    return t.asyncQueue.enqueueAndForget((function() {
        return n(o, void 0, void 0, (function() {
            var n;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return n = function(t, e, n, r, i) {
                        var o = new Ma({
                            next: function(n) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.enqueueAndForget((function() {
                                    return qs(t, s);
                                })), n.fromCache && "server" === r.source ? i.reject(new H(W.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), s = new Ks(n, o, {
                            includeMetadataChanges: !0,
                            wo: !0
                        });
                        return Vs(t, s);
                    }, [ 4 /*yield*/ , Ja(t) ];

                  case 1:
                    return [ 2 /*return*/ , n.apply(void 0, [ r.sent(), t.asyncQueue, e, i, s ]) ];
                }
            }));
        }));
    })), s.promise;
}

var $a = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */
function(t, e, n, r, i, o, s, a) {
    this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = r, this.ssl = i, 
    this.forceLongPolling = o, this.autoDetectLongPolling = s, this.useFetchStreams = a;
}, tu = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "isDefaultDatabase", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t;
}(), eu = new Map;

/** The default database name for a project. */
/**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */
/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nu(t, e, n) {
    if (!n) throw new H(W.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
}

/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */ function ru(t, e, n, r) {
    if (!0 === e && !0 === r) throw new H(W.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function iu(t) {
    if (!Lt.isDocumentKey(t)) throw new H(W.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function ou(t) {
    if (Lt.isDocumentKey(t)) throw new H(W.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */ function su(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** try to get the constructor name for an object. */
        function(t) {
            return t.constructor ? t.constructor.name : null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : K();
}

function au(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new H(W.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        var n = su(t);
        throw new H(W.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
    }
    return t;
}

function uu(t, e) {
    if (e <= 0) throw new H(W.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ var cu = /** @class */ function() {
    function t(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new H(W.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new H(W.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        this.useFetchStreams = !!t.useFetchStreams, ru("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
    }, t;
}(), hu = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n) {
        this._authCredentials = e, this._appCheckCredentials = n, 
        /**
             * Whether it's a Firestore or Firestore Lite instance.
             */
        this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new cu({}), 
        this._settingsFrozen = !1, t instanceof tu ? this._databaseId = t : (this._app = t, 
        this._databaseId = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new H(W.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new tu(t.options.projectId);
        }(t));
    }
    return Object.defineProperty(t.prototype, "app", {
        /**
         * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
         * instance.
         */
        get: function() {
            if (!this._app) throw new H(W.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this._app;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_initialized", {
        get: function() {
            return this._settingsFrozen;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_terminated", {
        get: function() {
            return void 0 !== this._terminateTask;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype._setSettings = function(t) {
        if (this._settingsFrozen) throw new H(W.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new cu(t), void 0 !== t.credentials && (this._authCredentials = function(t) {
            if (!t) return new X;
            switch (t.type) {
              case "gapi":
                var e = t.client;
                // Make sure this really is a Gapi client.
                                return G(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new et(e, t.sessionIndex || "0", t.iamToken || null);

              case "provider":
                return t.client;

              default:
                throw new H(W.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }, t.prototype._getSettings = function() {
        return this._settings;
    }, t.prototype._freezeSettings = function() {
        return this._settingsFrozen = !0, this._settings;
    }, t.prototype._delete = function() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }, 
    /** Returns a JSON-serializable representation of this `Firestore` instance. */ t.prototype.toJSON = function() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        };
    }, 
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */
    t.prototype._terminate = function() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return t = this, (e = eu.get(t)) && (q("ComponentProvider", "Removing Datastore"), 
        eu.delete(t), e.terminate()), Promise.resolve();
        var t, e;
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ function fu(t, e, n, r) {
    var i;
    void 0 === r && (r = {});
    var o = (t = au(t, hu))._getSettings();
    if ("firestore.googleapis.com" !== o.host && o.host !== e && B("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
    t._setSettings(Object.assign(Object.assign({}, o), {
        host: e + ":" + n,
        ssl: !1
    })), r.mockUserToken) {
        var s, a;
        if ("string" == typeof r.mockUserToken) s = r.mockUserToken, a = O.MOCK_USER; else {
            // Let createMockUserToken validate first (catches common mistakes like
            // invalid field "uid" and missing field "sub" / "user_id".)
            s = I(r.mockUserToken, null === (i = t._app) || void 0 === i ? void 0 : i.options.projectId);
            var u = r.mockUserToken.sub || r.mockUserToken.user_id;
            if (!u) throw new H(W.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
            a = new O(u);
        }
        t._authCredentials = new Z(new J(s, a));
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ var lu = /** @class */ function() {
    /** @hideconstructor */
    function t(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._key = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    return Object.defineProperty(t.prototype, "_path", {
        get: function() {
            return this._key.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
        /**
         * The document's identifier within its collection.
         */
        get: function() {
            return this._key.path.lastSegment();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        /**
         * A string representing the path of the referenced document (relative
         * to the root of the database).
         */
        get: function() {
            return this._key.path.canonicalString();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        /**
         * The collection this `DocumentReference` belongs to.
         */
        get: function() {
            return new pu(this.firestore, this.converter, this._key.path.popLast());
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this._key);
    }, t;
}(), du = /** @class */ function() {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    function t(t, 
    /**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */
    e, n) {
        this.converter = e, this._query = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    return t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this._query);
    }, t;
}(), pu = /** @class */ function(e) {
    /** @hideconstructor */
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, we(r)) || this)._path = r, 
        /** The type of this Firestore reference. */
        i.type = "collection", i;
    }
    return t(n, e), Object.defineProperty(n.prototype, "id", {
        /** The collection's identifier. */ get: function() {
            return this._query.path.lastSegment();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        /**
         * A string representing the path of the referenced collection (relative
         * to the root of the database).
         */
        get: function() {
            return this._query.path.canonicalString();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        /**
         * A reference to the containing `DocumentReference` if this is a
         * subcollection. If this isn't a subcollection, the reference is null.
         */
        get: function() {
            var t = this._path.popLast();
            return t.isEmpty() ? null : new lu(this.firestore, 
            /* converter= */ null, new Lt(t));
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.withConverter = function(t) {
        return new n(this.firestore, t, this._path);
    }, n;
}(du);

/**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ function yu(t, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t = b(t), nu("collection", "path", n), t instanceof hu) {
        var o = mt.fromString.apply(mt, e([ n ], r));
        return ou(o), new pu(t, /* converter= */ null, o);
    }
    if (!(t instanceof lu || t instanceof pu)) throw new H(W.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    var s = t._path.child(mt.fromString.apply(mt, e([ n ], r)));
    return ou(s), new pu(t.firestore, 
    /* converter= */ null, s);
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root `Firestore` instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function vu(t, e) {
    if (t = au(t, hu), nu("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new H(W.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
    return new du(t, 
    /* converter= */ null, 
    /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
    function(t) {
        return new me(mt.emptyPath(), t);
    }(e));
}

function mu(t, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t = b(t), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (n = at.A()), nu("doc", "path", n), t instanceof hu) {
        var o = mt.fromString.apply(mt, e([ n ], r));
        return iu(o), new lu(t, 
        /* converter= */ null, new Lt(o));
    }
    if (!(t instanceof lu || t instanceof pu)) throw new H(W.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    var s = t._path.child(mt.fromString.apply(mt, e([ n ], r)));
    return iu(s), new lu(t.firestore, t instanceof pu ? t.converter : null, new Lt(s));
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function gu(t, e) {
    return t = b(t), e = b(e), (t instanceof lu || t instanceof pu) && (e instanceof lu || e instanceof pu) && t.firestore === e.firestore && t.path === e.path && t.converter === e.converter
    /**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */;
}

function wu(t, e) {
    return t = b(t), e = b(e), t instanceof du && e instanceof du && t.firestore === e.firestore && De(t._query, e._query) && t.converter === e.converter
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;
}

var bu = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.ma = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.ga = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.ya = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.pa = [], 
        // visible for testing
        this.Ta = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Ea = !1, 
        // Enabled during shutdown on Safari to prevent future access to IndexedDB.
        this.Ia = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Aa = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.ur = new $o(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Ra = function() {
            var e = Xo();
            e && q("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.ur.er();
        };
        var e = Xo();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Ra);
    }
    return Object.defineProperty(t.prototype, "isShuttingDown", {
        get: function() {
            return this.ya;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.enqueueAndForget = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, t.prototype.enqueueAndForgetEvenWhileRestricted = function(t) {
        this.Pa(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.ba(t);
    }, t.prototype.enterRestrictedMode = function(t) {
        if (!this.ya) {
            this.ya = !0, this.Ia = t || !1;
            var e = Xo();
            e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.Ra);
        }
    }, t.prototype.enqueue = function(t) {
        var e = this;
        if (this.Pa(), this.ya) 
        // Return a Promise which never resolves.
        return new Promise((function() {}));
        // Create a deferred Promise that we can return to the callee. This
        // allows us to return a "hanging Promise" only to the callee and still
        // advance the queue even when the operation is not run.
                var n = new Y;
        return this.ba((function() {
            return e.ya && e.Ia ? Promise.resolve() : (t().then(n.resolve, n.reject), n.promise);
        })).then((function() {
            return n.promise;
        }));
    }, t.prototype.enqueueRetryable = function(t) {
        var e = this;
        this.enqueueAndForget((function() {
            return e.ga.push(t), e.va();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.va = function() {
        return n(this, void 0, void 0, (function() {
            var t, e = this;
            return r(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (0 === this.ga.length) return [ 3 /*break*/ , 5 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.ga[0]() ];

                  case 2:
                    return n.sent(), this.ga.shift(), this.ur.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!Yr(t = n.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return q("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.ga.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.ur.Zi((function() {
                        return e.va();
                    })), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ba = function(t) {
        var e = this, n = this.ma.then((function() {
            return e.Ea = !0, t().catch((function(t) {
                e.Ta = t, e.Ea = !1;
                var n = 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t);
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                                throw U("INTERNAL UNHANDLED ERROR: ", n), t;
            })).then((function(t) {
                return e.Ea = !1, t;
            }));
        }));
        return this.ma = n, n;
    }, t.prototype.enqueueAfterDelay = function(t, e, n) {
        var r = this;
        this.Pa(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Aa.indexOf(t) > -1 && (e = 0);
        var i = xs.createAndSchedule(this, t, e, n, (function(t) {
            return r.Va(t);
        }));
        return this.pa.push(i), i;
    }, t.prototype.Pa = function() {
        this.Ta && K();
    }, t.prototype.verifyOperationInProgress = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Sa = function() {
        return n(this, void 0, void 0, (function() {
            var t;
            return r(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.ma ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.ma) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.Da = function(t) {
        for (var e = 0, n = this.pa; e < n.length; e++) {
            if (n[e].timerId === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.Ca = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Sa().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.pa.sort((function(t, e) {
                return t.targetTimeMs - e.targetTimeMs;
            }));
            for (var n = 0, r = e.pa; n < r.length; n++) {
                var i = r[n];
                if (i.skipDelay(), "all" /* All */ !== t && i.timerId === t) break;
            }
            return e.Sa();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Na = function(t) {
        this.Aa.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.Va = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.pa.indexOf(t);
        this.pa.splice(e, 1);
    }, t;
}();

function Iu(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Tu = /** @class */ function() {
    function t() {
        this._progressObserver = {}, this._taskCompletionResolver = new Y, this._lastProgress = {
            taskState: "Running",
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0
        }
        /**
     * Registers functions to listen to bundle loading progress events.
     * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
     *   each time a Firestore document is loaded from the bundle.
     * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
     *   error, and there should be no more updates after this.
     * @param complete - Called when the loading task is complete.
     */;
    }
    return t.prototype.onProgress = function(t, e, n) {
        this._progressObserver = {
            next: t,
            error: e,
            complete: n
        };
    }, 
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
     *
     * @param onRejected - Called when an error occurs during bundle loading.
     */
    t.prototype.catch = function(t) {
        return this._taskCompletionResolver.promise.catch(t);
    }, 
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
     *
     * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
     *   The update will always have its `taskState` set to `"Success"`.
     * @param onRejected - Called when an error occurs during bundle loading.
     */
    t.prototype.then = function(t, e) {
        return this._taskCompletionResolver.promise.then(t, e);
    }, 
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     *
     * @private
     */
    t.prototype._completeWith = function(t) {
        this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), 
        this._taskCompletionResolver.resolve(t);
    }, 
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     *
     * @private
     */
    t.prototype._failWith = function(t) {
        this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), 
        this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t);
    }, 
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     *
     * @private
     */
    t.prototype._updateProgress = function(t) {
        this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t);
    }, t;
}(), Eu = -1, Su = /** @class */ function(e) {
    /** @hideconstructor */
    function n(t, n, r) {
        var i = this;
        /**
             * Whether it's a {@link Firestore} or Firestore Lite instance.
             */
        return (i = e.call(this, t, n, r) || this).type = "firestore", i._queue = new bu, 
        i._persistenceKey = "name" in t ? t.name : "[DEFAULT]", i;
    }
    return t(n, e), n.prototype._terminate = function() {
        return this._firestoreClient || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        Du(this), this._firestoreClient.terminate();
    }, n;
}(hu);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** DOMException error code constants. */
/**
 * Initializes a new instance of {@link Firestore} with the provided settings.
 * Can only be called before any other function, including
 * {@link getFirestore}. If the custom settings are empty, this function is
 * equivalent to calling {@link getFirestore}.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} with which the {@link Firestore} instance will
 * be associated.
 * @param settings - A settings object to configure the {@link Firestore} instance.
 * @returns A newly initialized {@link Firestore} instance.
 */
function _u(t, e) {
    var n = _getProvider(t, "firestore");
    if (n.isInitialized()) {
        var r = n.getImmediate(), i = n.getOptions();
        if (T(i, e)) return r;
        throw new H(W.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
    }
    if (void 0 !== e.cacheSizeBytes && -1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576) throw new H(W.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
    return n.initialize({
        options: e
    });
}

/**
 * Returns the existing {@link Firestore} instance that is associated with the
 * provided {@link @firebase/app#FirebaseApp}. If no instance exists, initializes a new
 * instance with default settings.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned {@link Firestore}
 * instance is associated with.
 * @returns The {@link Firestore} instance of the provided app.
 */ function ku(t) {
    return void 0 === t && (t = a()), _getProvider(t, "firestore").getImmediate();
}

/**
 * @internal
 */ function Au(t) {
    return t._firestoreClient || Du(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}

function Du(t) {
    var e, n = t._freezeSettings(), r = function(t, e, n, r) {
        return new $a(t, e, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling, r.useFetchStreams);
    }(t._databaseId, (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || "", t._persistenceKey, n);
    t._firestoreClient = new Ba(t._authCredentials, t._appCheckCredentials, t._queue, r);
}

/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link getFirestore} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the {@link Firestore} instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The {@link Firestore} instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A `Promise` that represents successfully enabling persistent storage.
 */ function Nu(t, e) {
    qu(t = au(t, Su));
    var n = Au(t), r = t._freezeSettings(), i = new Pa;
    return xu(n, i, new La(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
}

/**
 * Attempts to enable multi-tab persistent storage, if possible. If enabled
 * across all tabs, all operations share access to local persistence, including
 * shared execution of queries and latency-compensated local document updates
 * across all connected instances.
 *
 * If this fails, `enableMultiTabIndexedDbPersistence()` will reject the promise
 * it returns. Note that even after this failure, the {@link Firestore} instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab and
 *     multi-tab is not enabled.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The {@link Firestore} instance to enable persistence for.
 * @returns A `Promise` that represents successfully enabling persistent
 * storage.
 */ function Cu(t) {
    qu(t = au(t, Su));
    var e = Au(t), n = t._freezeSettings(), r = new Pa;
    return xu(e, r, new Oa(r, n.cacheSizeBytes));
}

/**
 * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
 * If the operation fails with a recoverable error (see
 * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
 * but the client remains usable.
 */ function xu(t, e, i) {
    var o = this, s = new Y;
    return t.asyncQueue.enqueue((function() {
        return n(o, void 0, void 0, (function() {
            var n;
            return r(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return r.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , ja(t, i) ];

                  case 1:
                    return r.sent(), [ 4 /*yield*/ , Ka(t, e) ];

                  case 2:
                    return r.sent(), s.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!
                    /**
         * Decides whether the provided error allows us to gracefully disable
         * persistence (as opposed to crashing the client).
         */
                    function(t) {
                        return "FirebaseError" === t.name ? t.code === W.FAILED_PRECONDITION || t.code === W.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code || 
                        // Firefox Private Browsing mode disables IndexedDb and returns
                        // INVALID_STATE for any usage.
                        11 === t.code);
                    }(n = r.sent())) throw n;
                    return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + n), 
                    s.reject(n), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    })).then((function() {
        return s.promise;
    }));
}

function Ru(t) {
    var e = this;
    if (t._initialized && !t._terminated) throw new H(W.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
    var i = new Y;
    return t._queue.enqueueAndForgetEvenWhileRestricted((function() {
        return n(e, void 0, void 0, (function() {
            var e;
            return r(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return o.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t) {
                        return n(this, void 0, void 0, (function() {
                            var e;
                            return r(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return Qr.bt() ? (e = t + "main", [ 4 /*yield*/ , Qr.delete(e) ]) : [ 2 /*return*/ , Promise.resolve() ];

                                  case 1:
                                    return n.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(ro(t._databaseId, t._persistenceKey)) ];

                  case 1:
                    return o.sent(), i.resolve(), [ 3 /*break*/ , 3 ];

                  case 2:
                    return e = o.sent(), i.reject(e), [ 3 /*break*/ , 3 ];

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    })), i.promise
    /**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned promise resolves immediately if there are no outstanding writes.
 * Otherwise, the promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` promises are rejected during user
 * changes.
 *
 * @returns A `Promise` which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */;
}

function Lu(t) {
    return function(t) {
        var e = this, i = new Y;
        return t.asyncQueue.enqueueAndForget((function() {
            return n(e, void 0, void 0, (function() {
                var e;
                return r(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = ca, [ 4 /*yield*/ , Ya(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), i ]) ];
                    }
                }));
            }));
        })), i.promise;
    }(Au(t = au(t, Su)));
}

/**
 * Re-enables use of the network for this {@link Firestore} instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A `Promise` that is resolved once the network has been enabled.
 */ function Ou(t) {
    return function(t) {
        var e = this;
        return t.asyncQueue.enqueue((function() {
            return n(e, void 0, void 0, (function() {
                var e, n;
                return r(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return [ 4 /*yield*/ , Qa(t) ];

                      case 1:
                        return e = r.sent(), [ 4 /*yield*/ , Ha(t) ];

                      case 2:
                        return n = r.sent(), [ 2 /*return*/ , (e.setNetworkEnabled(!0), function(t) {
                            var e = Q(t);
                            return e.Gr.delete(0 /* UserDisabled */), ss(e);
                        }(n)) ];
                    }
                }));
            }));
        }));
    }
    /** Disables the network connection. Pending operations will not complete. */ (Au(t = au(t, Su)));
}

/**
 * Disables network usage for this instance. It can be re-enabled via {@link
 * enableNetwork}. While the network is disabled, any snapshot listeners,
 * `getDoc()` or `getDocs()` calls will return results from cache, and any write
 * operations will be queued until the network is restored.
 *
 * @returns A `Promise` that is resolved once the network has been disabled.
 */ function Pu(t) {
    return function(t) {
        var e = this;
        return t.asyncQueue.enqueue((function() {
            return n(e, void 0, void 0, (function() {
                var e, i;
                return r(this, (function(o) {
                    switch (o.label) {
                      case 0:
                        return [ 4 /*yield*/ , Qa(t) ];

                      case 1:
                        return e = o.sent(), [ 4 /*yield*/ , Ha(t) ];

                      case 2:
                        return i = o.sent(), [ 2 /*return*/ , (e.setNetworkEnabled(!1), function(t) {
                            return n(this, void 0, void 0, (function() {
                                var e;
                                return r(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return (e = Q(t)).Gr.add(0 /* UserDisabled */), [ 4 /*yield*/ , as(e) ];

                                      case 1:
                                        return n.sent(), 
                                        // Set the OnlineState to Offline so get()s return from cache, etc.
                                        e.Jr.set("Offline" /* Offline */), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(i)) ];
                    }
                }));
            }));
        }));
    }
    /**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */ (Au(t = au(t, Su)));
}

/**
 * Terminates the provided {@link Firestore} instance.
 *
 * After calling `terminate()` only the `clearIndexedDbPersistence()` function
 * may be used. Any other function will throw a `FirestoreError`.
 *
 * To restart after termination, create a new instance of FirebaseFirestore with
 * {@link getFirestore}.
 *
 * Termination does not cancel any pending writes, and any promises that are
 * awaiting a response from the server will not be resolved. If you have
 * persistence enabled, the next time you start this instance, it will resume
 * sending these writes to the server.
 *
 * Note: Under normal circumstances, calling `terminate()` is not required. This
 * function is useful only when you want to force this instance to release all
 * of its resources or in combination with `clearIndexedDbPersistence()` to
 * ensure that all local state is destroyed between test runs.
 *
 * @returns A `Promise` that is resolved when the instance has been successfully
 * terminated.
 */ function Fu(t) {
    return u(t.app, "firestore"), t._delete()
    /**
 * Loads a Firestore bundle into the local cache.
 *
 * @param firestore - The {@link Firestore} instance to load bundles for for.
 * @param bundleData - An object representing the bundle to be loaded. Valid objects are
 *   `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
 *
 * @returns
 *   A `LoadBundleTask` object, which notifies callers with progress updates, and completion
 *   or error events. It can be used as a `Promise<LoadBundleTaskProgress>`.
 */;
}

function Mu(t, e) {
    var i = Au(t = au(t, Su)), o = new Tu;
    return function(t, e, i, o) {
        var s = this, a = function(t, e) {
            return function(t, e) {
                return new Va(t, e);
            }(function(t, e) {
                if (t instanceof Uint8Array) return Fa(t, e);
                if (t instanceof ArrayBuffer) return Fa(new Uint8Array(t), e);
                if (t instanceof ReadableStream) return t.getReader();
                throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
            }("string" == typeof t ? (new TextEncoder).encode(t) : t), e);
        }(i, Zo(e));
        t.asyncQueue.enqueueAndForget((function() {
            return n(s, void 0, void 0, (function() {
                var e;
                return r(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = xa, [ 4 /*yield*/ , Ya(t) ];

                      case 1:
                        return e.apply(void 0, [ n.sent(), a, o ]), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }(i, t._databaseId, e, o), o
    /**
 * Reads a Firestore {@link Query} from local cache, identified by the given name.
 *
 * The named queries are packaged  into bundles on the server side (along
 * with resulting documents), and loaded to local cache using `loadBundle`. Once in local
 * cache, use this method to extract a {@link Query} by name.
 */;
}

function Vu(t, e) {
    return function(t, e) {
        var i = this;
        return t.asyncQueue.enqueue((function() {
            return n(i, void 0, void 0, (function() {
                var n;
                return r(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return n = function(t, e) {
                            var n = Q(t);
                            return n.persistence.runTransaction("Get named query", "readonly", (function(t) {
                                return n.Ye.getNamedQuery(t, e);
                            }));
                        }, [ 4 /*yield*/ , Wa(t) ];

                      case 1:
                        return [ 2 /*return*/ , n.apply(void 0, [ r.sent(), e ]) ];
                    }
                }));
            }));
        }));
    }(Au(t = au(t, Su)), e).then((function(e) {
        return e ? new du(t, null, e.query) : null;
    }));
}

function qu(t) {
    if (t._initialized || t._terminated) throw new H(W.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ var Uu = /** @class */ function() {
    /**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n) if (0 === t[n].length) throw new H(W.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new wt(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    return t.prototype.isEqual = function(t) {
        return this._internalPath.isEqual(t._internalPath);
    }, t;
}();

/**
 * Returns a special sentinel `FieldPath` to refer to the ID of a document.
 * It can be used in queries to sort or filter by the document ID.
 */ function Bu() {
    return new Uu("__name__");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing an array of bytes.
 */ var ju = /** @class */ function() {
    /** @hideconstructor */
    function t(t) {
        this._byteString = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    return t.fromBase64String = function(e) {
        try {
            return new t(Tt.fromBase64String(e));
        } catch (e) {
            throw new H(W.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
        }
    }, 
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */
    t.fromUint8Array = function(e) {
        return new t(Tt.fromUint8Array(e));
    }, 
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */
    t.prototype.toBase64 = function() {
        return this._byteString.toBase64();
    }, 
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */
    t.prototype.toUint8Array = function() {
        return this._byteString.toUint8Array();
    }, 
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */
    t.prototype.toString = function() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }, 
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this._byteString.isEqual(t._byteString);
    }, t;
}(), Ku = 
/**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
function(t) {
    this._methodName = t;
}, Gu = /** @class */ function() {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    function t(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new H(W.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new H(W.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this._lat = t, this._long = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * The latitude of this `GeoPoint` instance.
         */
        get: function() {
            return this._lat;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * The longitude of this `GeoPoint` instance.
         */
        get: function() {
            return this._long;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this._lat === t._lat && this._long === t._long;
    }, 
    /** Returns a JSON-serializable representation of this GeoPoint. */ t.prototype.toJSON = function() {
        return {
            latitude: this._lat,
            longitude: this._long
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype._compareTo = function(t) {
        return ut(this._lat, t._lat) || ut(this._long, t._long);
    }, t;
}(), zu = /^__.*__$/, Qu = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    return t.prototype.toMutation = function(t, e) {
        return null !== this.fieldMask ? new an(t, this.data, this.fieldMask, e, this.fieldTransforms) : new sn(t, this.data, e, this.fieldTransforms);
    }, t;
}(), Wu = /** @class */ function() {
    function t(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    return t.prototype.toMutation = function(t, e) {
        return new an(t, this.data, this.fieldMask, e, this.fieldTransforms);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ function Hu(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw K();
    }
}

/** A "context" object passed around while parsing user data. */ var Yu = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.databaseId = e, this.k = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.ka(), this.fieldTransforms = i || [], this.fieldMask = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "xa", {
        get: function() {
            return this.settings.xa;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.$a = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.k, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }, t.prototype.Fa = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.$a({
            path: n,
            Oa: !1
        });
        return r.Ma(t), r;
    }, t.prototype.La = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.$a({
            path: n,
            Oa: !1
        });
        return r.ka(), r;
    }, t.prototype.Ba = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.$a({
            path: void 0,
            Oa: !0
        });
    }, t.prototype.Ua = function(t) {
        return yc(t, this.settings.methodName, this.settings.qa || !1, this.path, this.settings.Ka);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.fieldMask.find((function(e) {
            return t.isPrefixOf(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.isPrefixOf(e.field);
        }));
    }, t.prototype.ka = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.Ma(this.path.get(t));
    }, t.prototype.Ma = function(t) {
        if (0 === t.length) throw this.Ua("Document fields must not be empty");
        if (Hu(this.xa) && zu.test(t)) throw this.Ua('Document fields cannot begin and end with "__"');
    }, t;
}(), Ju = /** @class */ function() {
    function t(t, e, n) {
        this.databaseId = t, this.ignoreUndefinedProperties = e, this.k = n || Zo(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.ja = function(t, e, n, r) {
        return void 0 === r && (r = !1), new Yu({
            xa: t,
            methodName: e,
            Ka: n,
            path: wt.emptyPath(),
            Oa: !1,
            qa: r
        }, this.databaseId, this.k, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ function Xu(t) {
    var e = t._freezeSettings(), n = Zo(t._databaseId);
    return new Ju(t._databaseId, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function Zu(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.ja(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    fc("Data must be an object, but it was:", s, r);
    var a, u, c = cc(r, s);
    if (o.merge) a = new bt(s.fieldMask), u = s.fieldTransforms; else if (o.mergeFields) {
        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var d = lc(e, l[f], n);
            if (!s.contains(d)) throw new H(W.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
            vc(h, d) || h.push(d);
        }
        a = new bt(h), u = s.fieldTransforms.filter((function(t) {
            return a.covers(t.field);
        }));
    } else a = null, u = s.fieldTransforms;
    return new Qu(new Ht(c), a, u);
}

var $u = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype._toFieldTransform = function(t) {
        if (2 /* MergeSet */ !== t.xa) throw 1 /* Update */ === t.xa ? t.Ua(this._methodName + "() can only appear at the top level of your update data") : t.Ua(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.fieldMask.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Ku);

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function tc(t, e, n) {
    return new Yu({
        xa: 3 /* Argument */ ,
        Ka: e.settings.Ka,
        methodName: t._methodName,
        Oa: n
    }, e.databaseId, e.k, e.ignoreUndefinedProperties);
}

var ec = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t(n, e), n.prototype._toFieldTransform = function(t) {
        return new Ye(t.path, new Be);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Ku), nc = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).Qa = n, r;
    }
    return t(n, e), n.prototype._toFieldTransform = function(t) {
        var e = tc(this, t, 
        /*array=*/ !0), n = this.Qa.map((function(t) {
            return uc(t, e);
        })), r = new je(n);
        return new Ye(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ku), rc = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).Qa = n, r;
    }
    return t(n, e), n.prototype._toFieldTransform = function(t) {
        var e = tc(this, t, 
        /*array=*/ !0), n = this.Qa.map((function(t) {
            return uc(t, e);
        })), r = new Ge(n);
        return new Ye(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ku), ic = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t) || this).Wa = n, r;
    }
    return t(n, e), n.prototype._toFieldTransform = function(t) {
        var e = new Qe(t.k, Fe(t.k, this.Wa));
        return new Ye(t.path, e);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Ku);

/** Parse update data from an update() call. */ function oc(t, e, n, r) {
    var i = t.ja(1 /* Update */ , e, n);
    fc("Data must be an object, but it was:", i, r);
    var o = [], s = Ht.empty();
    pt(r, (function(t, r) {
        var a = pc(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r = b(r);
        var u = i.La(a);
        if (r instanceof $u) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(a); else {
            var c = uc(r, u);
            null != c && (o.push(a), s.set(a, c));
        }
    }));
    var a = new bt(o);
    return new Wu(s, a, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function sc(t, e, n, r, i, o) {
    var s = t.ja(1 /* Update */ , e, n), a = [ lc(e, r, n) ], u = [ i ];
    if (o.length % 2 != 0) throw new H(W.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var c = 0; c < o.length; c += 2) a.push(lc(e, o[c])), u.push(o[c + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var h = [], f = Ht.empty(), l = a.length - 1; l >= 0; --l) if (!vc(h, a[l])) {
        var d = a[l], p = u[l];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
        p = b(p);
        var y = s.La(d);
        if (p instanceof $u) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(d); else {
            var v = uc(p, y);
            null != v && (h.push(d), f.set(d, v));
        }
    }
    var m = new bt(h);
    return new Wu(f, m, s.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function ac(t, e, n, r) {
    return void 0 === r && (r = !1), uc(n, t.ja(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function uc(t, e) {
    if (hc(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = b(t))) return fc("Unsupported field value:", e, t), cc(t, e);
    if (t instanceof Ku) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Hu(e.xa)) throw e.Ua(t._methodName + "() can only be used with update() and set()");
        if (!e.path) throw e.Ua(t._methodName + "() is not currently supported inside arrays");
        var n = t._toFieldTransform(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Oa && 4 /* ArrayArgument */ !== e.xa) throw e.Ua("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = uc(o[i], e.Ba(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === (t = b(t))) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return Fe(e.k, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = ft.fromDate(t);
            return {
                timestampValue: zn(e.k, n)
            };
        }
        if (t instanceof ft) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new ft(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: zn(e.k, r)
            };
        }
        if (t instanceof Gu) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof ju) return {
            bytesValue: Qn(e.k, t._byteString)
        };
        if (t instanceof lu) {
            var i = e.databaseId, o = t.firestore._databaseId;
            if (!o.isEqual(i)) throw e.Ua("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: Yn(t.firestore._databaseId || e.databaseId, t._key.path)
            };
        }
        throw e.Ua("Unsupported field value: " + su(t));
    }(t, e);
}

function cc(t, e) {
    var n = {};
    return yt(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path) : pt(t, (function(t, r) {
        var i = uc(r, e.Fa(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function hc(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof ft || t instanceof Gu || t instanceof ju || t instanceof lu || t instanceof Ku);
}

function fc(t, e, n) {
    if (!hc(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        var r = su(n);
        throw "an object" === r ? e.Ua(t + " a custom object") : e.Ua(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function lc(t, e, n) {
    if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    (e = b(e)) instanceof Uu) return e._internalPath;
    if ("string" == typeof e) return pc(t, e);
    throw yc("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ var dc = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function pc(t, n, r) {
    if (n.search(dc) >= 0) throw yc("Invalid field path (" + n + "). Paths must not contain '~', '*', '/', '[', or ']'", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, r);
    try {
        return (new (Uu.bind.apply(Uu, e([ void 0 ], n.split(".")))))._internalPath;
    } catch (e) {
        throw yc("Invalid field path (" + n + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, r);
    }
}

function yc(t, e, n, r, i) {
    var o = r && !r.isEmpty(), s = void 0 !== i, a = "Function " + e + "() called with invalid data";
    n && (a += " (via `toFirestore()`)");
    var u = "";
    return (o || s) && (u += " (found", o && (u += " in field " + r), s && (u += " in document " + i), 
    u += ")"), new H(W.INVALID_ARGUMENT, (a += ". ") + t + u)
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */;
}

function vc(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ var mc = /** @class */ function() {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    function t(t, e, n, r, i) {
        this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, 
        this._converter = i;
    }
    return Object.defineProperty(t.prototype, "id", {
        /** Property of the `DocumentSnapshot` that provides the document's ID. */ get: function() {
            return this._key.path.lastSegment();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        /**
         * The `DocumentReference` for the document included in the `DocumentSnapshot`.
         */
        get: function() {
            return new lu(this._firestore, this._converter, this._key);
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */
    t.prototype.exists = function() {
        return null !== this._document;
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */
    t.prototype.data = function() {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var t = new gc(this._firestore, this._userDataWriter, this._key, this._document, 
                /* converter= */ null);
                return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.prototype.get = function(t) {
        if (this._document) {
            var e = this._document.data.field(wc("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
        }
    }, t;
}(), gc = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */    return t(n, e), n.prototype.data = function() {
        return e.prototype.data.call(this);
    }, n;
}(mc);

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */
/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */
function wc(t, e) {
    return "string" == typeof e ? pc(t, e) : e instanceof Uu ? e._internalPath : e._delegate._internalPath;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ var bc = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e
        /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Ic = /** @class */ function(e) {
    /** @hideconstructor protected */
    function n(t, n, r, i, o, s) {
        var a = this;
        return (a = e.call(this, t, n, r, i, s) || this)._firestore = t, a._firestoreImpl = t, 
        a.metadata = o, a;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    return t(n, e), n.prototype.exists = function() {
        return e.prototype.exists.call(this);
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */
    n.prototype.data = function(t) {
        if (void 0 === t && (t = {}), this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var e = new Tc(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, 
                /* converter= */ null);
                return this._converter.fromFirestore(e, t);
            }
            return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    n.prototype.get = function(t, e) {
        if (void 0 === e && (e = {}), this._document) {
            var n = this._document.data.field(wc("DocumentSnapshot.get", t));
            if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
        }
    }, n;
}(mc), Tc = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */    return t(n, e), n.prototype.data = function(t) {
        return void 0 === t && (t = {}), e.prototype.data.call(this, t);
    }, n;
}(Ic), Ec = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n, r) {
        this._firestore = t, this._userDataWriter = e, this._snapshot = r, this.metadata = new bc(r.hasPendingWrites, r.fromCache), 
        this.query = n;
    }
    return Object.defineProperty(t.prototype, "docs", {
        /** An array of all the documents in the `QuerySnapshot`. */ get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        /** The number of documents in the `QuerySnapshot`. */ get: function() {
            return this._snapshot.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        /** True if there are no documents in the `QuerySnapshot`. */ get: function() {
            return 0 === this.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */
    t.prototype.forEach = function(t, e) {
        var n = this;
        this._snapshot.docs.forEach((function(r) {
            t.call(e, new Tc(n._firestore, n._userDataWriter, r.key, r, new bc(n._snapshot.mutatedKeys.has(r.key), n._snapshot.fromCache), n.query.converter));
        }));
    }, 
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */
    t.prototype.docChanges = function(t) {
        void 0 === t && (t = {});
        var e = !!t.includeMetadataChanges;
        if (e && this._snapshot.excludesMetadataChanges) throw new H(W.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = 
        /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
        function(t, e) {
            if (t._snapshot.oldDocs.isEmpty()) {
                var n = 0;
                return t._snapshot.docChanges.map((function(e) {
                    return {
                        type: "added",
                        doc: new Tc(t._firestore, t._userDataWriter, e.doc.key, e.doc, new bc(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query.converter),
                        oldIndex: -1,
                        newIndex: n++
                    };
                }));
            }
            // A `DocumentSet` that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var r = t._snapshot.oldDocs;
            return t._snapshot.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var n = new Tc(t._firestore, t._userDataWriter, e.doc.key, e.doc, new bc(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query.converter), i = -1, o = -1;
                return 0 /* Added */ !== e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
                    type: Sc(e.type),
                    doc: n,
                    oldIndex: i,
                    newIndex: o
                };
            }));
        }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
    }, t;
}();

/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ function Sc(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return K();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function _c(t, e) {
    return t instanceof Ic && e instanceof Ic ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof Ec && e instanceof Ec && t._firestore === e._firestore && wu(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kc(t) {
    if (Ie(t) && 0 === t.explicitOrderBy.length) throw new H(W.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * endBefore:1}, {@link (endAt:1)}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ var Ac = function() {};

/**
 * Creates a new immutable instance of {@link Query} that is extended to also include
 * additional query constraints.
 *
 * @param query - The {@link Query} instance to use as a base for the new constraints.
 * @param queryConstraints - The list of {@link QueryConstraint}s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function Dc(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
        var o = i[r];
        t = o._apply(t);
    }
    return t;
}

var Nc = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).Ga = t, i.za = n, i.Ha = r, i.type = "where", 
        i;
    }
    return t(n, e), n.prototype._apply = function(t) {
        var e = Xu(t.firestore), n = function(t, e, n, r, i, o, s) {
            var a;
            if (i.isKeyField()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new H(W.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
                if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
                    Gc(s, o);
                    for (var u = [], c = 0, h = s; c < h.length; c++) {
                        var f = h[c];
                        u.push(Kc(r, t, f));
                    }
                    a = {
                        arrayValue: {
                            values: u
                        }
                    };
                } else a = Kc(r, t, s);
            } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || Gc(s, o), 
            a = ac(n, "where", s, 
            /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
            var l = ne.create(i, o, a);
            return function(t, e) {
                if (e.V()) {
                    var n = Ee(t);
                    if (null !== n && !n.isEqual(e.field)) throw new H(W.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                    var r = Te(t);
                    null !== r && zc(t, e.field, r);
                }
                var i = function(t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (e.indexOf(i.op) >= 0) return i.op;
                    }
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. `NOT_EQUAL` cannot be used with another `NOT_EQUAL` operator.
 * 4. `NOT_IN` cannot be used with array, disjunctive, or `NOT_EQUAL` operators.
 *
 * Array operators: `ARRAY_CONTAINS`, `ARRAY_CONTAINS_ANY`
 * Disjunctive operators: `IN`, `ARRAY_CONTAINS_ANY`, `NOT_IN`
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(e.op));
                if (null !== i) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw i === e.op ? new H(W.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new H(W.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
            }(t, l), l;
        }(t._query, 0, e, t.firestore._databaseId, this.Ga, this.za, this.Ha);
        return new du(t.firestore, t.converter, function(t, e) {
            var n = t.filters.concat([ e ]);
            return new me(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, n));
    }, n;
}(Ac);

/**
 * Creates a {@link QueryConstraint} that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created {@link Query}.
 */ function Cc(t, e, n) {
    var r = e, i = wc("where", t);
    return new Nc(i, r, n);
}

var xc = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Ga = t, r.Ja = n, r.type = "orderBy", r;
    }
    return t(n, e), n.prototype._apply = function(t) {
        var e = function(t, e, n) {
            if (null !== t.startAt) throw new H(W.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new H(W.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            var r = new de(e, n);
            return function(t, e) {
                if (null === Te(t)) {
                    // This is the first order by. It must match any inequality.
                    var n = Ee(t);
                    null !== n && zc(t, n, e.field);
                }
            }(t, r), r;
        }(t._query, this.Ga, this.Ja);
        return new du(t.firestore, t.converter, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.explicitOrderBy.concat([ e ]);
            return new me(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, e));
    }, n;
}(Ac);

/**
 * Creates a {@link QueryConstraint} that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created {@link Query}.
 */ function Rc(t, e) {
    void 0 === e && (e = "asc");
    var n = e, r = wc("orderBy", t);
    return new xc(r, n);
}

var Lc = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).type = t, i.Ya = n, i.Xa = r, i;
    }
    return t(n, e), n.prototype._apply = function(t) {
        return new du(t.firestore, t.converter, Ae(t._query, this.Ya, this.Xa));
    }, n;
}(Ac);

/**
 * Creates a {@link QueryConstraint} that only returns the first matching documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link Query}.
 */ function Oc(t) {
    return uu("limit", t), new Lc("limit", t, "F" /* First */)
    /**
 * Creates a {@link QueryConstraint} that only returns the last matching documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created {@link Query}.
 */;
}

function Pc(t) {
    return uu("limitToLast", t), new Lc("limitToLast", t, "L" /* Last */);
}

var Fc = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).type = t, i.Za = n, i.tc = r, i;
    }
    return t(n, e), n.prototype._apply = function(t) {
        var e = jc(t, this.type, this.Za, this.tc);
        return new du(t.firestore, t.converter, function(t, e) {
            return new me(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t._query, e));
    }, n;
}(Ac);

function Mc() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return new Fc("startAt", t, /*before=*/ !0);
}

function Vc() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return new Fc("startAfter", t, 
    /*before=*/ !1);
}

var qc = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).type = t, i.Za = n, i.tc = r, i;
    }
    return t(n, e), n.prototype._apply = function(t) {
        var e = jc(t, this.type, this.Za, this.tc);
        return new du(t.firestore, t.converter, function(t, e) {
            return new me(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t._query, e));
    }, n;
}(Ac);

function Uc() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return new qc("endBefore", t, /*before=*/ !0);
}

function Bc() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return new qc("endAt", t, /*before=*/ !1);
}

/** Helper function to create a bound from a document or fields */ function jc(t, e, n, r) {
    if (n[0] = b(n[0]), n[0] instanceof mc) return function(t, e, n, r, i) {
        if (!r) throw new H(W.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var o = [], s = 0, a = _e(t); s < a.length; s++) {
            var u = a[s];
            if (u.field.isKeyField()) o.push(Bt(e, r.key)); else {
                var c = r.data.field(u.field);
                if (At(c)) throw new H(W.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + u.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === c) {
                    var h = u.field.canonicalString();
                    throw new H(W.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                }
                o.push(c);
            }
        }
        return new fe(o, i);
    }(t._query, t.firestore._databaseId, e, n[0]._document, r);
    var i = Xu(t.firestore);
    return function(t, e, n, r, i, o) {
        // Use explicit order by's because it has to match the query the user made
        var s = t.explicitOrderBy;
        if (i.length > s.length) throw new H(W.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
        for (var a = [], u = 0; u < i.length; u++) {
            var c = i[u];
            if (s[u].field.isKeyField()) {
                if ("string" != typeof c) throw new H(W.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                if (!Se(t) && -1 !== c.indexOf("/")) throw new H(W.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                var h = t.path.child(mt.fromString(c));
                if (!Lt.isDocumentKey(h)) throw new H(W.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                var f = new Lt(h);
                a.push(Bt(e, f));
            } else {
                var l = ac(n, r, c);
                a.push(l);
            }
        }
        return new fe(a, o);
    }(t._query, t.firestore._databaseId, i, e, n, r);
}

function Kc(t, e, n) {
    if ("string" == typeof (n = b(n))) {
        if ("" === n) throw new H(W.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Se(e) && -1 !== n.indexOf("/")) throw new H(W.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(mt.fromString(n));
        if (!Lt.isDocumentKey(r)) throw new H(W.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return Bt(t, new Lt(r));
    }
    if (n instanceof lu) return Bt(t, n._key);
    throw new H(W.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + su(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function Gc(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new H(W.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new H(W.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}

function zc(t, e, n) {
    if (!n.isEqual(e)) throw new H(W.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ var Qc = /** @class */ function() {
    function t() {}
    return t.prototype.convertValue = function(t, e) {
        switch (void 0 === e && (e = "none"), Ot(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return _t(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.convertTimestamp(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.convertServerTimestamp(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.convertBytes(kt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.convertReference(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.convertGeoPoint(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.convertArray(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.convertObject(t.mapValue, e);

          default:
            throw K();
        }
    }, t.prototype.convertObject = function(t, e) {
        var n = this, r = {};
        return pt(t.fields, (function(t, i) {
            r[t] = n.convertValue(i, e);
        })), r;
    }, t.prototype.convertGeoPoint = function(t) {
        return new Gu(_t(t.latitude), _t(t.longitude));
    }, t.prototype.convertArray = function(t, e) {
        var n = this;
        return (t.values || []).map((function(t) {
            return n.convertValue(t, e);
        }));
    }, t.prototype.convertServerTimestamp = function(t, e) {
        switch (e) {
          case "previous":
            var n = Dt(t);
            return null == n ? null : this.convertValue(n, e);

          case "estimate":
            return this.convertTimestamp(Nt(t));

          default:
            return null;
        }
    }, t.prototype.convertTimestamp = function(t) {
        var e = St(t);
        return new ft(e.seconds, e.nanos);
    }, t.prototype.convertDocumentKey = function(t, e) {
        var n = mt.fromString(t);
        G(br(n));
        var r = new tu(n.get(1), n.get(3)), i = new Lt(n.popFirst(5));
        return r.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        U("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), 
        i;
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function Wc(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var Hc = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).firestore = t, n;
    }
    return t(n, e), n.prototype.convertBytes = function(t) {
        return new ju(t);
    }, n.prototype.convertReference = function(t) {
        var e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new lu(this.firestore, /* converter= */ null, e);
    }, n;
}(Qc), Yc = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, 
        this._dataReader = Xu(t);
    }
    return t.prototype.set = function(t, e, n) {
        this._verifyNotCommitted();
        var r = Jc(t, this._firestore), i = Wc(r.converter, e, n), o = Zu(this._dataReader, "WriteBatch.set", r._key, i, null !== r.converter, n);
        return this._mutations.push(o.toMutation(r._key, Xe.none())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        this._verifyNotCommitted();
        var o, s = Jc(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return o = "string" == typeof (e = b(e)) || e instanceof Uu ? sc(this._dataReader, "WriteBatch.update", s._key, e, n, r) : oc(this._dataReader, "WriteBatch.update", s._key, e), 
        this._mutations.push(o.toMutation(s._key, Xe.exists(!0))), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        this._verifyNotCommitted();
        var e = Jc(t, this._firestore);
        return this._mutations = this._mutations.concat(new dn(e._key, Xe.none())), this;
    }, 
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A `Promise` resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */
    t.prototype.commit = function() {
        return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
    }, t.prototype._verifyNotCommitted = function() {
        if (this._committed) throw new H(W.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ function Jc(t, e) {
    if ((t = b(t)).firestore !== e) throw new H(W.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function Xc(t) {
    t = au(t, lu);
    var e = au(t.firestore, Su);
    return Xa(Au(e), t._key).then((function(n) {
        return fh(e, t, n);
    }));
}

var Zc = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).firestore = t, n;
    }
    return t(n, e), n.prototype.convertBytes = function(t) {
        return new ju(t);
    }, n.prototype.convertReference = function(t) {
        var e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new lu(this.firestore, /* converter= */ null, e);
    }, n;
}(Qc);

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A `Promise` resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function $c(t) {
    t = au(t, lu);
    var e = au(t.firestore, Su), i = Au(e), o = new Zc(e);
    return function(t, e) {
        var i = this, o = new Y;
        return t.asyncQueue.enqueueAndForget((function() {
            return n(i, void 0, void 0, (function() {
                var i;
                return r(this, (function(s) {
                    switch (s.label) {
                      case 0:
                        return i = function(t, e, i) {
                            return n(this, void 0, void 0, (function() {
                                var n, o, s;
                                return r(this, (function(r) {
                                    switch (r.label) {
                                      case 0:
                                        return r.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                            var n = Q(t);
                                            return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                return n.Wn.Rn(t, e);
                                            }));
                                        }(t, e) ];

                                      case 1:
                                        return (n = r.sent()).isFoundDocument() ? i.resolve(n) : n.isNoDocument() ? i.resolve(null) : i.reject(new H(W.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                        [ 3 /*break*/ , 3 ];

                                      case 2:
                                        return o = r.sent(), s = Rs(o, "Failed to get document '" + e + " from cache"), 
                                        i.reject(s), [ 3 /*break*/ , 3 ];

                                      case 3:
                                        return [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }, [ 4 /*yield*/ , Wa(t) ];

                      case 1:
                        return [ 2 /*return*/ , i.apply(void 0, [ s.sent(), e, o ]) ];
                    }
                }));
            }));
        })), o.promise;
    }(i, t._key).then((function(n) {
        return new Ic(e, o, t._key, n, new bc(null !== n && n.hasLocalMutations, 
        /* fromCache= */ !0), t.converter);
    }));
}

/**
 * Reads the document referred to by this `DocumentReference` from the server.
 * Returns an error if the network is not available.
 *
 * @returns A `Promise` resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function th(t) {
    t = au(t, lu);
    var e = au(t.firestore, Su);
    return Xa(Au(e), t._key, {
        source: "server"
    }).then((function(n) {
        return fh(e, t, n);
    }));
}

/**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */ function eh(t) {
    t = au(t, du);
    var e = au(t.firestore, Su), n = Au(e), r = new Zc(e);
    return kc(t._query), Za(n, t._query).then((function(n) {
        return new Ec(e, r, t, n);
    }))
    /**
 * Executes the query and returns the results as a `QuerySnapshot` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */;
}

function nh(t) {
    t = au(t, du);
    var e = au(t.firestore, Su), i = Au(e), o = new Zc(e);
    return function(t, e) {
        var i = this, o = new Y;
        return t.asyncQueue.enqueueAndForget((function() {
            return n(i, void 0, void 0, (function() {
                var i;
                return r(this, (function(s) {
                    switch (s.label) {
                      case 0:
                        return i = function(t, e, i) {
                            return n(this, void 0, void 0, (function() {
                                var n, o, s, a, u, c;
                                return r(this, (function(r) {
                                    switch (r.label) {
                                      case 0:
                                        return r.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , wo(t, e, 
                                        /* usePreviousResults= */ !0) ];

                                      case 1:
                                        return n = r.sent(), o = new Js(e, n.zn), s = o.bo(n.documents), a = o.applyChanges(s, 
                                        /* updateLimboDocuments= */ !1), i.resolve(a.snapshot), [ 3 /*break*/ , 3 ];

                                      case 2:
                                        return u = r.sent(), c = Rs(u, "Failed to execute query '" + e + " against cache"), 
                                        i.reject(c), [ 3 /*break*/ , 3 ];

                                      case 3:
                                        return [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }, [ 4 /*yield*/ , Wa(t) ];

                      case 1:
                        return [ 2 /*return*/ , i.apply(void 0, [ s.sent(), e, o ]) ];
                    }
                }));
            }));
        })), o.promise;
    }(i, t._query).then((function(n) {
        return new Ec(e, o, t, n);
    }));
}

/**
 * Executes the query and returns the results as a `QuerySnapshot` from the
 * server. Returns an error if the network is not available.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */ function rh(t) {
    t = au(t, du);
    var e = au(t.firestore, Su), n = Au(e), r = new Zc(e);
    return Za(n, t._query, {
        source: "server"
    }).then((function(n) {
        return new Ec(e, r, t, n);
    }));
}

function ih(t, e, n) {
    t = au(t, lu);
    var r = au(t.firestore, Su), i = Wc(t.converter, e, n);
    return hh(r, [ Zu(Xu(r), "setDoc", t._key, i, null !== t.converter, n).toMutation(t._key, Xe.none()) ]);
}

function oh(t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    t = au(t, lu);
    var o = au(t.firestore, Su), s = Xu(o);
    return hh(o, [ ("string" == typeof (
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    e = b(e)) || e instanceof Uu ? sc(s, "updateDoc", t._key, e, n, r) : oc(s, "updateDoc", t._key, e)).toMutation(t._key, Xe.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function sh(t) {
    return hh(au(t.firestore, Su), [ new dn(t._key, Xe.none()) ]);
}

/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */ function ah(t, e) {
    var n = au(t.firestore, Su), r = mu(t), i = Wc(t.converter, e);
    return hh(n, [ Zu(Xu(t.firestore), "addDoc", r._key, i, null !== t.converter, {}).toMutation(r._key, Xe.exists(!1)) ]).then((function() {
        return r;
    }));
}

function uh(t) {
    for (var e, i, o, s = [], a = 1; a < arguments.length; a++) s[a - 1] = arguments[a];
    t = b(t);
    var u = {
        includeMetadataChanges: !1
    }, c = 0;
    "object" != typeof s[c] || Iu(s[c]) || (u = s[c], c++);
    var h, f, l, d = {
        includeMetadataChanges: u.includeMetadataChanges
    };
    if (Iu(s[c])) {
        var p = s[c];
        s[c] = null === (e = p.next) || void 0 === e ? void 0 : e.bind(p), s[c + 1] = null === (i = p.error) || void 0 === i ? void 0 : i.bind(p), 
        s[c + 2] = null === (o = p.complete) || void 0 === o ? void 0 : o.bind(p);
    }
    if (t instanceof lu) f = au(t.firestore, Su), l = we(t._key.path), h = {
        next: function(e) {
            s[c] && s[c](fh(f, t, e));
        },
        error: s[c + 1],
        complete: s[c + 2]
    }; else {
        var y = au(t, du);
        f = au(y.firestore, Su), l = y._query;
        var v = new Zc(f);
        h = {
            next: function(t) {
                s[c] && s[c](new Ec(f, v, y, t));
            },
            error: s[c + 1],
            complete: s[c + 2]
        }, kc(t._query);
    }
    return function(t, e, i, o) {
        var s = this, a = new Ma(o), u = new Ks(e, a, i);
        return t.asyncQueue.enqueueAndForget((function() {
            return n(s, void 0, void 0, (function() {
                var e;
                return r(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = Vs, [ 4 /*yield*/ , Ja(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), u ]) ];
                    }
                }));
            }));
        })), function() {
            a.na(), t.asyncQueue.enqueueAndForget((function() {
                return n(s, void 0, void 0, (function() {
                    var e;
                    return r(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = qs, [ 4 /*yield*/ , Ja(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), u ]) ];
                        }
                    }));
                }));
            }));
        };
    }(Au(f), l, d, h);
}

function ch(t, e) {
    return function(t, e) {
        var i = this, o = new Ma(e);
        return t.asyncQueue.enqueueAndForget((function() {
            return n(i, void 0, void 0, (function() {
                var e;
                return r(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = function(t, e) {
                            Q(t).io.add(e), 
                            // Immediately fire an initial event, indicating all existing listeners
                            // are in-sync.
                            e.next();
                        }, [ 4 /*yield*/ , Ja(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), o ]) ];
                    }
                }));
            }));
        })), function() {
            o.na(), t.asyncQueue.enqueueAndForget((function() {
                return n(i, void 0, void 0, (function() {
                    var e;
                    return r(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = function(t, e) {
                                Q(t).io.delete(e);
                            }, [ 4 /*yield*/ , Ja(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), o ]) ];
                        }
                    }));
                }));
            }));
        }
        /**
 * Takes an updateFunction in which a set of reads and writes can be performed
 * atomically. In the updateFunction, the client can read and write values
 * using the supplied transaction object. After the updateFunction, all
 * changes will be committed. If a retryable error occurs (ex: some other
 * client has changed any of the data referenced), then the updateFunction
 * will be called again after a backoff. If the updateFunction still fails
 * after all retries, then the transaction will be rejected.
 *
 * The transaction object passed to the updateFunction contains methods for
 * accessing documents and collections. Unlike other datastore access, data
 * accessed with the transaction will not reflect local changes that have not
 * been committed. For this reason, it is required that all reads are
 * performed before any writes. Transactions must be performed while online.
 */;
    }(Au(t = au(t, Su)), Iu(e) ? e : {
        next: e
    });
}

/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */ function hh(t, e) {
    return function(t, e) {
        var i = this, o = new Y;
        return t.asyncQueue.enqueueAndForget((function() {
            return n(i, void 0, void 0, (function() {
                var n;
                return r(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return n = ra, [ 4 /*yield*/ , Ya(t) ];

                      case 1:
                        return [ 2 /*return*/ , n.apply(void 0, [ r.sent(), e, o ]) ];
                    }
                }));
            }));
        })), o.promise;
    }(Au(t), e);
}

/**
 * Converts a {@link ViewSnapshot} that contains the single document specified by `ref`
 * to a {@link DocumentSnapshot}.
 */ function fh(t, e, n) {
    var r = n.docs.get(e._key), i = new Zc(t);
    return new Ic(t, i, e._key, r, new bc(n.hasPendingWrites, n.fromCache), e.converter);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ var lh, dh = /** @class */ function(e) {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, n) || this)._firestore = t, r;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    return t(n, e), n.prototype.get = function(t) {
        var n = this, r = Jc(t, this._firestore), i = new Zc(this._firestore);
        return e.prototype.get.call(this, t).then((function(t) {
            return new Ic(n._firestore, i, r._key, t._document, new bc(
            /* hasPendingWrites= */ !1, 
            /* fromCache= */ !1), r.converter);
        }));
    }, n;
}(/** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this._firestore = t, this._transaction = e, this._dataReader = Xu(t)
        /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */;
    }
    return t.prototype.get = function(t) {
        var e = this, n = Jc(t, this._firestore), r = new Hc(this._firestore);
        return this._transaction.lookup([ n._key ]).then((function(t) {
            if (!t || 1 !== t.length) return K();
            var i = t[0];
            if (i.isFoundDocument()) return new mc(e._firestore, r, i.key, i, n.converter);
            if (i.isNoDocument()) return new mc(e._firestore, r, n._key, null, n.converter);
            throw K();
        }));
    }, t.prototype.set = function(t, e, n) {
        var r = Jc(t, this._firestore), i = Wc(r.converter, e, n), o = Zu(this._dataReader, "Transaction.set", r._key, i, null !== r.converter, n);
        return this._transaction.set(r._key, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        var o, s = Jc(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return o = "string" == typeof (e = b(e)) || e instanceof Uu ? sc(this._dataReader, "Transaction.update", s._key, e, n, r) : oc(this._dataReader, "Transaction.update", s._key, e), 
        this._transaction.update(s._key, o), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        var e = Jc(t, this._firestore);
        return this._transaction.delete(e._key), this;
    }, t;
}());

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */ function ph(t, e) {
    return function(t, e) {
        var i = this, o = new Y;
        return t.asyncQueue.enqueueAndForget((function() {
            return n(i, void 0, void 0, (function() {
                var n;
                return r(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return [ 4 /*yield*/ , function(t) {
                            return za(t).then((function(t) {
                                return t.datastore;
                            }));
                        }(t) ];

                      case 1:
                        return n = r.sent(), new Ua(t.asyncQueue, n, e, o).run(), [ 2 /*return*/ ];
                    }
                }));
            }));
        })), o.promise;
    }(Au(t = au(t, Su)), (function(n) {
        return e(new dh(t, n));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ function yh() {
    return new $u("deleteField");
}

/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */ function vh() {
    return new ec("serverTimestamp");
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */ function mh() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
        return new nc("arrayUnion", t);
}

/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function gh() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
        return new rc("arrayRemove", t);
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function wh(t) {
    return new ic("increment", t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single {@link WriteBatch}
 * is 500.
 *
 * Unlike transactions, write batches are persisted offline and therefore are
 * preferable when you don't need to condition your writes on read data.
 *
 * @returns A {@link WriteBatch} that can be used to atomically execute multiple
 * writes.
 */ function bh(t) {
    return Au(t = au(t, Su)), new Yc(t, (function(e) {
        return hh(t, e);
    }))
    /**
 * Cloud Firestore
 *
 * @packageDocumentation
 */;
}

void 0 === lh && (lh = !0), P = i, o(new c("firestore", (function(t, e) {
    var n = e.options, r = t.getProvider("app").getImmediate(), i = new Su(r, new $(t.getProvider("auth-internal")), new rt(t.getProvider("app-check-internal")));
    return n = Object.assign({
        useFetchStreams: lh
    }, n), i._setSettings(n), i;
}), "PUBLIC")), s(L, "3.4.1", void 0), 
// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
s(L, "3.4.1", "esm5");

export { Qc as AbstractUserDataWriter, ju as Bytes, Eu as CACHE_SIZE_UNLIMITED, pu as CollectionReference, lu as DocumentReference, Ic as DocumentSnapshot, Uu as FieldPath, Ku as FieldValue, Su as Firestore, H as FirestoreError, Gu as GeoPoint, Tu as LoadBundleTask, du as Query, Ac as QueryConstraint, Tc as QueryDocumentSnapshot, Ec as QuerySnapshot, bc as SnapshotMetadata, ft as Timestamp, dh as Transaction, Yc as WriteBatch, tu as _DatabaseId, Lt as _DocumentKey, it as _EmptyAppCheckTokenProvider, X as _EmptyAuthCredentialsProvider, wt as _FieldPath, au as _cast, z as _debugAssert, It as _isBase64Available, B as _logWarn, ru as _validateIsNotUsedTogether, ah as addDoc, gh as arrayRemove, mh as arrayUnion, Ru as clearIndexedDbPersistence, yu as collection, vu as collectionGroup, fu as connectFirestoreEmulator, sh as deleteDoc, yh as deleteField, Pu as disableNetwork, mu as doc, Bu as documentId, Nu as enableIndexedDbPersistence, Cu as enableMultiTabIndexedDbPersistence, Ou as enableNetwork, Bc as endAt, Uc as endBefore, Au as ensureFirestoreConfigured, hh as executeWrite, Xc as getDoc, $c as getDocFromCache, th as getDocFromServer, eh as getDocs, nh as getDocsFromCache, rh as getDocsFromServer, ku as getFirestore, wh as increment, _u as initializeFirestore, Oc as limit, Pc as limitToLast, Mu as loadBundle, Vu as namedQuery, uh as onSnapshot, ch as onSnapshotsInSync, Rc as orderBy, Dc as query, wu as queryEqual, gu as refEqual, ph as runTransaction, vh as serverTimestamp, ih as setDoc, V as setLogLevel, _c as snapshotEqual, Vc as startAfter, Mc as startAt, Fu as terminate, oh as updateDoc, Lu as waitForPendingWrites, Cc as where, bh as writeBatch };
//# sourceMappingURL=index.esm5.js.map
