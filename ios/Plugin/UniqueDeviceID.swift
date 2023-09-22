import Foundation

@objc public class UniqueDeviceID: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
