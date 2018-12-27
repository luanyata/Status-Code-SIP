'use strict'

// 1xx Provisional Responses
export const TRYING = 100;
export const RINGING = 180;
export const CALL_BEING_FORWARDED = 181;
export const QUEUED = 182;
export const SESSION_PROGRESS = 183;
export const EARLY_DIALOG_TERMINATED = 199;

// 2xx Successful Responses
export const OK = 200;
export const ACCEPTED = 202;
export const NO_NOTIFICATION = 204;

// 3xx Redirection Responses
export const MULTIPLE_CHOICES = 300;
export const MOVED_PERMANENTLY = 301;
export const MOVED_TEMPORARILY = 302;
export const USE_PROXY = 305;
export const ALTERNATIVE_SERVICE = 380;

// 4XX Client Failure Responses
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const PAYMENT_REQUIRED = 402;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const METHOD_NOT_ALLOWE = 405;
export const NOT_ACCEPTABLE = 406;
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export const REQUEST_TIMEOUT = 408;
export const CONFLICT = 409;
export const GONE = 410;
export const LENGTH_REQUIRED = 411;
export const PRECONDITION_FAILED = 412;
export const REQUEST_ENTITY_TOO_LARGE = 413;
export const REQUEST_URI_TOO_LONG = 414;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const UNSUPPORTED_URI_SHEME = 416;
export const UNKNOWN_RESOURCE_PRIORITY = 417;
export const BAD_EXTENSION = 420;
export const EXTENSION_REQUEST = 421;
export const SESSION_INTERVAL_TOO_SMALL = 422;
export const INTERVAL_TOO_BRIEF = 423;
export const BAD_LOCATION_INFORMATION = 424;
export const USE_IDENTITY_HEADER = 428;
export const PROVIDE_REFERRER_IDENTITY = 429;
export const ANONYMITY_DISALLOWED = 433;
export const BAD_IDENTITY_INFO = 436;
export const UNSUPPORTED_CERTIFICATE = 437;
export const INVALID_IDENTITY_HEADER = 438;
export const FIRST_HOP_LACKS_OUTBOUND_SUPPORT = 439;
export const MAXBREADTH_EXCEEDED = 440;
export const BAD_INFO_PACKAGE = 469;
export const CONSENT_NEEDED = 470;
export const TEMPORARILY_UNAVAILABLE = 480;
export const CALL_TRANSACTION_DOES_NOT_EXIST = 481;
export const LOOP_DETECTED = 482;
export const TOO_MANY_HOPS = 483;
export const ADDRESS_IMCIMPLETE = 484;
export const AMBIGUOUS = 485;
export const BUSY_HERE = 486;
export const REQUEST_TERMINATED = 487;
export const NOT_ACCEPTABLE_HERE = 488;
export const BAD_EVENT = 489;
export const REQUEST_PENDING = 491;
export const UNDECIPHERABLE = 493;
export const SECURITY_AGREEMENT_REQUIRED = 494;

// 5XX Server Error
export const INTERNAL_SERVER_ERROR = 500;
export const NOT_IMPLEMENTED = 501;
export const BAD_GATEWAY = 502;
export const SERVICE_UNAVAILABLE = 503;
export const GATEWAY_TIMEOUT = 504;
export const SIP_VERSION_NOT_SUPPORTED = 505;
export const MESSAGE_TOO_LARGE = 513;
export const PRECONDITION_FAILURE = 580;
export const NETWORD_CONNECT_TIMEOUT_ERROR = 599;

// 6xx Global Failure Responses
export const BUSY_EVERYWHERE = 600;
export const DECLINE = 603;
export const DOES_NOT_EXIST_ANYWHERE = 604;
export const NOT_ACCEPTABLE = 606;
export const UNWANTED = 607;