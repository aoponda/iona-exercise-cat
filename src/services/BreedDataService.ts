import http from "@/http-common";

class BreedDataService {
  getAll(): Promise<any> {
    return http.get("/breeds");
  }
}

export default new BreedDataService();