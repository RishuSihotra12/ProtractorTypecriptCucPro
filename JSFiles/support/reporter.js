"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporter = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
const fs = __importStar(require("fs"));
const mkdirp = __importStar(require("mkdirp"));
const path = __importStar(require("path"));
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";
const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    theme: "bootstrap",
};
class Reporter {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
    static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
exports.Reporter = Reporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdXBwb3J0L3JlcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBbUQ7QUFDbkQsdUNBQXlCO0FBQ3pCLCtDQUFpQztBQUNqQywyQ0FBNkI7QUFDN0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDOUQsTUFBTSxVQUFVLEdBQUcsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0FBRXpELE1BQU0sdUJBQXVCLEdBQUc7SUFDNUIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsTUFBTSxFQUFFLFdBQVcsR0FBRyx5QkFBeUI7SUFDL0Msc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixZQUFZLEVBQUUsSUFBSTtJQUNsQixLQUFLLEVBQUUsV0FBVztDQUNyQixDQUFDO0FBRUYsTUFBYSxRQUFRO0lBRVYsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFXO1FBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLGdCQUFnQjtRQUMxQixJQUFJO1lBQ0EsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1NBQy9FO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixJQUFJLEdBQUcsRUFBRTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7YUFDekU7U0FDSjtJQUNMLENBQUM7Q0FDSjtBQWpCRCw0QkFpQkMifQ==