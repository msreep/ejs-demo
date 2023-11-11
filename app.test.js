const app = require("./server-2")
const supertest = require("supertest")
const request = supertest(app)

describe("/ endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/")
        expect(response.cookie.myname.toBe("Mike");
        expect(response.status).toBe(200)
    })
})
