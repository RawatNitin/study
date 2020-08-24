class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef){
        appRef.DoBootstrap(AppComponent)
    }
}