import http from "@/http-common";

class ImageDataService {
  getBreedImages(id: any): Promise<any> {
    return http.get(`/images/search?breed_ids=${id}&limit=25`);
  }

  getImageDetails(id: any): Promise<any> {
    return http.get(`/images/${id}`);
  }
}

export default new ImageDataService();