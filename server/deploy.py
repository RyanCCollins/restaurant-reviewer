from subprocess import call
import time
import os
import shutil

call(["npm", "run", "deploy"])
time.sleep(120)
src = './app/dist'
dest = './server/public'
src_files = os.listdir(src)
for file_name in src_files:
    full_file_name = os.path.join(src, file_name)
    if (os.path.isfile(full_file_name)):
        shutil.move(full_file_name, dest)
