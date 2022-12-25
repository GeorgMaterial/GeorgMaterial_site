import os
import csv

home = os.getcwd()

read_data = open("test.js")
data_content = read_data.read()
read_data.close()

def import_lyrics(title):
    lyric_array = []
    lyrics = ""
    os.chdir("lyrics")
    with open(title + ".txt") as lyric_file:
        lyric_array = lyric_file.read()
    lyrics = lyric_array.replace("\n","\\n")
    os.chdir(home)
    print(lyrics)
    return lyrics

def compile_links(title):
    links = ''
    with open('links.csv') as links_csv:
        csv_reader = csv.DictReader(links_csv)
        for row in csv_reader:
            if row['song'] == title:
                links = (f"{{spotify_url:'{row['spotify']}',\napple_music_url:'{row['apple_music']}',\nyoutube_url:'{row['youtube']}',\nbandcamp_url:'{row['bandcamp']}'\n}},")
            else:
                print("that didnt work")
    return links




def create_new_show(): #retrieves new show data from user input & automatically formats it
    date = input("date:\n")
    name = input("name:\n")
    venue = input("venue:\n")
    time = input("time:\n")

    new_show = f",{{date: '{date}',\nname: '{name}',\nvenue: '{venue}',\ntime: '{time}'\n}},\n//insert new show here"
    return new_show

def create_new_song(): #retreives new song data from user input & automatically formats it
    song_name = input("Song name?\n")
    song_year = input("Year it was released?\n")
    if_links = input("Do you want to update links now? y/n\n")
    if if_links == "y":
        links = compile_links(song_name)
    lyric_import = input("Import Lyrics? y/n\n")
    if lyric_import == "y":
        lyrics = import_lyrics(song_name)
    else:
        print("lyrics to be added later.\n\n")
    song_about = input("Whats the song about?")

    new_song = f',{{name: "{song_name}", \nyear: "{song_year}", \nlisten: [{links}], \nlyrics: "{lyrics}",\nabout:"{song_about}"}}\n//insert song here'
    return new_song


#this function writes the new data to file
def write_to_file(new_data, category):
    with open("test.js",'w') as data_file:
        new_content = data_content.replace(f"//insert {category} here",new_data)
        print(new_content)
        data_file.write(new_content)


section_choice = input("What would you like to edit?\n1. Shows\n2. Songs\n3. Visuals\n4. News\n5. About\n")

if section_choice == '1':
    new_show = create_new_show()
    write_to_file(new_show, "show")
elif section_choice == '2':
    new_song = create_new_song()
    write_to_file(new_song, "song")
elif section_choice == '3':
    category = "visuals"
elif section_choice == '4':
    category = "news"
elif section_choice == '5':
    category = "about"









