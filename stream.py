""" the problems are interpreter based, but that seems irrelevant
    run the file with $ streamlit run your_script.py """

import streamlit as st

st.write("""
# My first app!
Hello world!!!
""")

number = st.slider("Pick a number", 0, 1000)

color = st.color_picker('Pick a color')
