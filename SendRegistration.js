var req = new XMLHttpRequest();
req.open("POST", serverUrl + "/XRMServices/2011/Organization.svc/web", true);

req.setRequestHeader("Accept", "application/xml, text/xml, */*");
req.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
req.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
req.onreadystatechange = function () {
    if (this.readyState == 4 /* complete */) {
        if (this.status == 204 || this.status == 1223) {
        }
        else {
        }
        unassignedUsersList.splice(0, 1);
        AssignAllUserss();
    }
};
req.send(requestMain);