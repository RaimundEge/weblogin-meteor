// keep global variables

var msg = new String("");
export var setMessage = (m) => {msg = m };
export var getMessage = () => {
    var oldMsg = msg;
    msg = "";
    return oldMsg;
};