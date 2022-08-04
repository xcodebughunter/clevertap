//
//  ClevertapApp.swift
//  Clevertap
//
//  Created by Jochi Duarte on 4/08/22.
//

import SwiftUI
import CleverTapSDK

@main
struct ClevertapApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
    
    let profile: Dictionary<String, AnyObject> = [
        "Name": "Jose Luis Duarte",
        "Email": "jidesh+joseduarte@clevertap.com",
    ]

    CleverTap.sharedInstance()?.onUserLogin(profile)
}
