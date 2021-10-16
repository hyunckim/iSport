const feed_api_util = require("./feed_api_util")
// @ponicode
describe("feed_api_util.fetchFeed", () => {
    test("0", () => {
        let callFunction = () => {
            feed_api_util.fetchFeed("myDIV")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            feed_api_util.fetchFeed(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("feed_api_util.fetchFeeds", () => {
    test("0", () => {
        let callFunction = () => {
            feed_api_util.fetchFeeds()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("feed_api_util.createFeed", () => {
    test("0", () => {
        let callFunction = () => {
            feed_api_util.createFeed("3cBk3sCzB58vfDGAznLJK9KPSnW1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            feed_api_util.createFeed("MPZf3hhgRxurYDDVsHhDc23nDi")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            feed_api_util.createFeed("LKinAN1FRfbjJXYAEWCbx1H443wbjHip")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            feed_api_util.createFeed("3pxicLBUuEs8qDUKmTABBcWrxzf")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            feed_api_util.createFeed("Lq8wLspXaJraZSs3CwiCTF85mkvp")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            feed_api_util.createFeed(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
