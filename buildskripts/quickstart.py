#!/usr/bin/python
# -*- coding: <encoding name> -*-

def checkFile(arg):
    if arg['mimeType'] in mimetypes:
        print('The file ' + str(arg['title']) + ' has a mimetype of ' + arg['mimeType'] + ' and will be downloaded')
        downloadFile(arg)
        return
    if arg['mimeType'] in folder:
        print('The file ' + str(arg['title']) + ' has a mimetype of ' + arg['mimeType'] + ' and will be entered')
        enterFolder(arg['id'])
    return

def enterFolder(query):
    file_list = drive.ListFile({'q': '\'' + query + '\' in parents and trashed=false'}).GetList()
    for file1 in file_list:
        checkFile(file1)
    return

def downloadFile(arg):
   download_mimetype = None
   download_mimetype = mimetypes[arg['mimeType']]
   arg.GetContentFile(arg['title'], mimetype=download_mimetype)
   print(arg['title'] + ' got downloaded')
   return

import sys
sys.path.insert(1, '/Library/Python/2.7/site-packages')

from pydrive.auth import GoogleAuth

gauth = GoogleAuth()
gauth.LoadCredentialsFile("mycreds.txt")
if gauth.credentials is None:
    # Authenticate if they're not there
    gauth.LocalWebserverAuth()
elif gauth.access_token_expired:
    # Refresh them if expired
    gauth.Refresh()
else:
    # Initialize the saved creds
    gauth.Authorize()
# Save the current credentials to a file
gauth.SaveCredentialsFile("mycreds.txt")

from pydrive.drive import GoogleDrive

mimetypes = {
    # Drive Document files as plain text.
    'application/vnd.google-apps.document': 'text/plain',
    'image/gif': "image/gif",
    'image/png': "image/png",
    'image/jpg': "image/jpg",
    'video/webm': "video/webm",

    # etc.
}

folder = {
    # Comparing for folder.
    'application/vnd.google-apps.folder': 'true'
    # etc.
}

# Create GoogleDrive instance with authenticated GoogleAuth instance.
drive = GoogleDrive(gauth)

#Start entry for the file import normally the ID 0B8dBRm3E0JMbdGtJelhlZ2IxejQ is for the wiki_entrys folder
enterFolder('0B8dBRm3E0JMbdGtJelhlZ2IxejQ')
