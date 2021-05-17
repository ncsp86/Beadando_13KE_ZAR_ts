import * as http from "http";
import { Content } from "./Content";
import { TsLinqHandler } from "./TsLinq";

class Program {
    constructor() {
        http.createServer(new Content().Content).listen(8080);
    }
}

new Program();