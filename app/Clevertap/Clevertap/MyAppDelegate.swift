//
//  MyAppDelegate.swift
//
//  Created by Jose Luis Duarte
//
import UIKit
import CleverTapSDK

class MyAppDelegate: UIResponder, UIApplicationDelegate {
    private func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject:AnyObject]?) -> Bool {
        CleverTap.autoIntegrate()
        return true
    }
}
